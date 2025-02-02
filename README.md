# Gamified Risk-Based Leaderboard System

## Overview
This project is a **Valorant-inspired** leaderboard system that incorporates a **risk-based Elo rating system**. Higher-ranked players can queue with lower-ranked players for a chance at **greater Elo gains**, depending on the rank difference between them. This system encourages strategic matchmaking while adding a risk-reward dynamic to ranked progression.

## Features
- **Dynamic Elo Rating System**
  - Players gain/lose Elo based on the ranks of teammates and opponents.
  - Higher-ranked players gain more Elo when playing with lower-ranked teammates.
  - Losing to lower-ranked opponents results in higher Elo losses.

- **Leaderboard System**
  - Displays player ranks and Elo scores.
  - Updates in real-time based on match results.
  
- **Rank-Based Matchmaking**
  - Players can queue together across rank gaps.
  - Increased rewards for riskier matchups.

## Ranks in the System
The ranking system follows a similar structure to **Valorant**:
- **Iron**
- **Bronze**
- **Silver**
- **Gold**
- **Platinum**
- **Diamond**
- **Ascended**
- **Immortal**
- **Radiant**

## How It Works
1. Players queue for a match, either solo or in a team.
2. The matchmaking algorithm considers rank differences.
3. The match is played, and Elo adjustments are calculated based on:
   - Team average Elo
   - Individual performance (optional feature)
   - Rank disparities
4. Winners gain Elo, and losers lose Elo proportionally.
5. Leaderboard updates accordingly.

## Technologies Used
- **Frontend**: React (for leaderboard UI and matchmaking interface)
- **Backend**: Flask (handling player data, Elo calculations, and matchmaking logic)
- **Database**: MongoDB (storing player profiles, ranks, and match history)

## Installation & Setup
### Prerequisites
- Python (for Flask backend)
- Node.js (for React frontend)
- MongoDB (database)

### Backend Setup (Flask API)
```bash
cd backend
pip install -r requirements.txt
python app.py 
'''

## Frontend Setup (React)
```bash
cd frontend
npm install
npm start
''''
MongoDB Setup
Ensure MongoDB is running locally or use a cloud instance (e.g., MongoDB Atlas). Update the .env file with your MongoDB URI.

Future Improvements
More advanced matchmaking algorithms
Performance-based Elo adjustments
Seasonal leaderboards and rewards
Integration with Discord for matchmaking coordination
Contribution
Feel free to fork the project, submit pull requests, and suggest improvements!

License
This project is open-source under the MIT License.
