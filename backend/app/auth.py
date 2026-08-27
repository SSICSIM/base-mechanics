from __future__ import annotations

from fastapi import Header, HTTPException, status

from app.config import settings


def require_admin_token(x_admin_token: str | None = Header(default=None)) -> None:
    # No-op until ADMIN_API_TOKEN is set — lets the API boot before real
    # endpoints and auth wiring exist.
    if not settings.admin_api_token:
        return
    if x_admin_token != settings.admin_api_token:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid admin token")
