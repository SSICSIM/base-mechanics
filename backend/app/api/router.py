from __future__ import annotations

from fastapi import APIRouter, Depends

from app.api.health import router as health_router
from app.auth import require_admin_token

# Central API router — applies the admin token guard once and mounts all
# sub-routers. Add new feature routers here as they're built, e.g.:
#   from app.api.widgets import router as widgets_router
#   api_router.include_router(widgets_router)
api_router = APIRouter(prefix="/api", dependencies=[Depends(require_admin_token)])
api_router.include_router(health_router)
