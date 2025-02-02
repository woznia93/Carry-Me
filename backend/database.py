from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
MONGO_URI = os.getenv("mongodb+srv://woznia93:monkey22@carryme1.skvdj.mongodb.net/?retryWrites=true&w=majority&appName=CarryMe1")
client = MongoClient("mongodb+srv://woznia93:monkey22@carryme1.skvdj.mongodb.net/?retryWrites=true&w=majority&appName=CarryMe1")
db = client["users"]

def connect_db():
    print("Connected to MongoDB Atlas")
