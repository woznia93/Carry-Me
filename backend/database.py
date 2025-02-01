from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["gamified_risk"]

def connect_db():
    print("Connected to MongoDB Atlas")
