from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    print("Received Data:", data)  # Debugging
    return jsonify({"message": "Registration successful!", "data": data})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
