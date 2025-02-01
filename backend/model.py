from pydantic import BaseModel
from typing import List, Optional

class User(BaseModel):
    user_id: str
    username: str
    tracker_gg_id: str
    rank: str
    elo: int
    matches: List[dict]

class Match(BaseModel):
    match_id: str
    teammates: List[str]
    elo_change: int
    outcome: str
