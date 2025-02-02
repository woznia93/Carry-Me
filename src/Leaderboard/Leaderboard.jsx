import React, { useState, useEffect } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the leaderboard data when the component mounts
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:5000/leaderboard");
        const data = await response.json();

        if (response.ok) {
          setLeaderboardData(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Error fetching leaderboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
      <div className="w-[100%] grid-cols-1 grid place-items-center">
        <h2 className="text-7xl text-center font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent overflow-visible py-4 px-4 mb-6 mt-8">
          Leaderboard
        </h2>

        {loading ? (
          <p className="text-white">Loading leaderboard...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : leaderboardData.length > 0 ? (
          <table className="text-white table-auto w-[80%]">
            <thead>
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Elo</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.elo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No leaderboard data available.</p>
        )}
      </div>
    </>
  );
}

export default Leaderboard;