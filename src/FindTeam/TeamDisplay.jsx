import { useParams } from "react-router-dom"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function TeamDisplay() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const {user, rank} = useParams()

  useEffect(() => {
    const fetchUsersByRank = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getuserbyrank?rank=${rank}`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersByRank();
  }, [rank]);

  return (
    <>
      <div className="p-6 mt-20 rounded-xl border-2 border-green-400 grid grid-cols-1 place-items-center">
        <p className="text-white text-4xl text-center max-w-[80%] px-4 font-bold">
          The following players are on your team:
        </p>
        {loading ? (
          <p className="text-white mt-4">Loading...</p>
        ) : users.length > 0 ? (
          <ul className="text-white mt-4">
            {users.map((user, index) => (
              <li key={index} className="text-2xl">
                {user.username} - {user.rank}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white mt-4">No players found for this rank.</p>
        )}
      </div>
    </>
  );
}

export default TeamDisplay;
