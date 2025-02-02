from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)  # Define 'app' before using it
CORS(app)

# Fetch MongoDB URI from environment variable
MONGO_URI = os.getenv("mongodb+srv://woznia93:monkey22@carryme1.skvdj.mongodb.net/?retryWrites=true&w=majority&appName=CarryMe1")

# Connect to MongoDB
client = MongoClient("mongodb+srv://woznia93:monkey22@carryme1.skvdj.mongodb.net/?retryWrites=true&w=majority&appName=CarryMe1")
db = client['users']
collection = db['base']

# Routes for registration and login (unchanged)
@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        print(f"Received data: {data}")  # Debugging line to check incoming data
        
        existing_user = collection.find_one({"$or": [{"username": data["username"]}, {"email": data["email"]}]})
        
        if existing_user:
            return jsonify({"message": "User already exists with the same username or email."}), 400
        
        result = collection.insert_one(data)
        data["_id"] = str(result.inserted_id)
        
        return jsonify({"message": "User registered successfully!", "data": data}), 201
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500


@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        user = collection.find_one({"$or": [{"username": data["username"]}]})
        print(user["password"])
        print(data["password"])
        if not user:
            return jsonify({"message": "User not found."}), 404
        
        if user["password"] != data["password"]:
            return jsonify({"message": "Incorrect password."}), 400
        
        user["_id"] = str(user["_id"])
        
        return jsonify({"message": "Login successful", "data": user}), 200
    
    except Exception as e: 
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route('/SelectBoxes', methods=['POST'])
def update_user():
    try:
        data = request.get_json()
        username = data.get("username")  # Find user by username
        update_fields = {key: value for key, value in data.items() if key != "username"}

        if not update_fields:
            return jsonify({"message": "No fields to update"}), 400

        result = collection.update_one(
            {"username": username},
            {"$set": update_fields},
        )

        if result.modified_count > 0:
            return jsonify({"message": "User updated successfully"}), 200
        else:
            return jsonify({"message": "User not found or no update needed"}), 404

    except Exception as e:
        return jsonify({"message": "Error updating user", "error": str(e)}), 500


@app.route('/getuserbyrank', methods=['GET'])
def get_user_by_rank():
    try:
        rank = request.args.get("rank")
        if not rank:
            return jsonify({"message": "Rank parameter is required"}), 400
        
        users = list(collection.find({"rank": rank}, {"_id": 0}))  # Exclude '_id' field from response
        
        if not users:
            return jsonify({"message": "No users found with the specified rank."}), 404
        
        return jsonify({"message": "Users retrieved successfully", "data": users}), 200
    except Exception as e:
        return jsonify({"message": "Error fetching users", "error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
