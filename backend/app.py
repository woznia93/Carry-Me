from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017')  # Update your MongoDB URI here
db = client['your_database']
collection = db['your_collection']

@app.route('/register', methods=['POST'])
def register():
    try:
        # Get data from the request
        data = request.get_json()
        
        # Insert the data into MongoDB
        result = collection.insert_one(data)
        
        # Convert ObjectId to string for JSON serialization
        data["_id"] = str(result.inserted_id)
        
        return jsonify({"message": "User registered successfully!", "data": data}), 201
    
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
