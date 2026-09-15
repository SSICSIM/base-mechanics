"""one_active_period_index

Enforces "at most one active crisis period" at the database level with a
partial unique index, closing a check-then-insert race in create_period()
where two concurrent requests could otherwise both pass the "no active
period" check and each insert an active period.

Revision ID: b2c3d4e5f6a7
Revises: a1b2c3d4e5f6
Create Date: 2026-09-14 12:00:00.000000

"""
from __future__ import annotations

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

revision: str = "b2c3d4e5f6a7"
down_revision: Union[str, None] = "a1b2c3d4e5f6"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_index(
        "ix_crisis_periods_one_active",
        "crisis_periods",
        ["is_active"],
        unique=True,
        postgresql_where=sa.text("is_active"),
    )


def downgrade() -> None:
    op.drop_index("ix_crisis_periods_one_active", table_name="crisis_periods")
