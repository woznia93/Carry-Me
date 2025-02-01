from fastapi import FastAPI
from app.routes import users, elo, leaderboard
from app.database import connect_db

app = FastAPI()

# Initialize DB connection
connect_db()

# Register Routes
app.include_router(users.router)
app.include_router(elo.router)
app.include_router(leaderboard.router)

@app.get("/")
def root():
    return {"message": "Welcome to the Gamified Risk API!"}
