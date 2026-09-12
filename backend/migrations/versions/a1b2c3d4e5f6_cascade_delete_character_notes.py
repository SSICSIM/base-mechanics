"""cascade_delete_character_notes

Revision ID: a1b2c3d4e5f6
Revises: 825db575c4a2
Create Date: 2026-09-12 19:00:00.000000

"""
from __future__ import annotations

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

revision: str = "a1b2c3d4e5f6"
down_revision: Union[str, None] = "825db575c4a2"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_constraint(
        "crisis_notes_character_id_fkey", "crisis_notes", type_="foreignkey"
    )
    op.create_foreign_key(
        "crisis_notes_character_id_fkey",
        "crisis_notes",
        "characters",
        ["character_id"],
        ["id"],
        ondelete="CASCADE",
    )


def downgrade() -> None:
    op.drop_constraint(
        "crisis_notes_character_id_fkey", "crisis_notes", type_="foreignkey"
    )
    op.create_foreign_key(
        "crisis_notes_character_id_fkey",
        "crisis_notes",
        "characters",
        ["character_id"],
        ["id"],
        ondelete="RESTRICT",
    )
