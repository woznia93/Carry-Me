from fastapi import APIRouter
from app.database import db
from app.services.tracker_api import fetch_tracker_data

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/register")
async def register(user_id: str, username: str, tracker_gg_id: str):
    user_data = fetch_tracker_data(tracker_gg_id)
    if not user_data:
        return {"error": "Invalid Tracker.gg ID"}

    user = {
        "user_id": user_id,
        "username": username,
        "tracker_gg_id": tracker_gg_id,
        "rank": user_data["rank"],
        "elo": 1000,
        "matches": []
    }
    db.users.insert_one(user)
    return {"message": "User registered successfully"}
