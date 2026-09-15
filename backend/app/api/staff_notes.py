from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.crisis_note import CrisisPeriod, StaffNote
from app.schemas import StaffNoteCreate, StaffNoteResponse, StaffNoteUpdate

router = APIRouter(prefix="/staff-notes", tags=["staff-notes"])


@router.get("", response_model=list[StaffNoteResponse])
def list_staff_notes(
    period_id: int = Query(...),
    db: Session = Depends(get_db),
) -> list[StaffNote]:
    return (
        db.query(StaffNote)
        .filter(StaffNote.period_id == period_id)
        .order_by(StaffNote.created_at.desc())
        .all()
    )


@router.post("", response_model=StaffNoteResponse, status_code=status.HTTP_201_CREATED)
def create_staff_note(body: StaffNoteCreate, db: Session = Depends(get_db)) -> StaffNote:
    active_period = db.query(CrisisPeriod).filter(CrisisPeriod.is_active.is_(True)).first()
    if not active_period:
        raise HTTPException(status_code=422, detail="No active period. Create a period first.")
    note = StaffNote(
        period_id=active_period.id,
        title=body.title,
        content=body.content,
    )
    db.add(note)
    db.commit()
    db.refresh(note)
    return note


@router.patch("/{note_id}", response_model=StaffNoteResponse)
def update_staff_note(
    note_id: int, body: StaffNoteUpdate, db: Session = Depends(get_db)
) -> StaffNote:
    note = db.get(StaffNote, note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Staff note not found.")
    for field, value in body.model_dump(exclude_unset=True).items():
        setattr(note, field, value)
    db.commit()
    db.refresh(note)
    return note


@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT, response_model=None)
def delete_staff_note(note_id: int, db: Session = Depends(get_db)) -> None:
    note = db.get(StaffNote, note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Staff note not found.")
    db.delete(note)
    db.commit()
