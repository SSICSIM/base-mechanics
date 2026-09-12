from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, ConfigDict

from app.models.crisis_note import NoteType, Priority


class HealthResponse(BaseModel):
    status: str = "ok"


# ── Characters ──────────────────────────────────────────────────────────────

class CharacterCreate(BaseModel):
    name: str


class CharacterResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    created_at: datetime


# ── Crisis Periods ───────────────────────────────────────────────────────────

class CrisisPeriodCreate(BaseModel):
    name: str


class CrisisPeriodResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    is_active: bool
    created_at: datetime
    archived_at: datetime | None


# ── Crisis Notes ─────────────────────────────────────────────────────────────

class CrisisNoteCreate(BaseModel):
    character_id: int
    title: str
    description: str
    crisis_staff_notes: str | None = None
    priority: Priority
    note_type: NoteType


class CrisisNoteUpdate(BaseModel):
    character_id: int | None = None
    title: str | None = None
    description: str | None = None
    crisis_staff_notes: str | None = None
    priority: Priority | None = None
    note_type: NoteType | None = None


class CrisisNoteResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    period_id: int
    character: CharacterResponse
    title: str
    description: str
    crisis_staff_notes: str | None
    priority: Priority
    note_type: NoteType
    created_at: datetime


# ── Staff Notes ───────────────────────────────────────────────────────────────

class StaffNoteCreate(BaseModel):
    title: str
    content: str


class StaffNoteUpdate(BaseModel):
    title: str | None = None
    content: str | None = None


class StaffNoteResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    period_id: int
    title: str
    content: str
    created_at: datetime


# ── Bulk upload ──────────────────────────────────────────────────────────────

class BulkUploadResult(BaseModel):
    created: int
    skipped: int


# ── Analytics ────────────────────────────────────────────────────────────────

class NotesByCharacter(BaseModel):
    character_name: str
    count: int


class PriorityCount(BaseModel):
    priority: Priority
    count: int


class AnalyticsSummary(BaseModel):
    total_notes: int
    notes_by_character: list[NotesByCharacter]
    priority_distribution: list[PriorityCount]
    private_directive_count: int
    public_directive_count: int
