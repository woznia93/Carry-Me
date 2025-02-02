import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function OpponentRankChoice() {
    
    const navigate = useNavigate()
    const {user} = useParams()

    const [selectedRank, setSelectedRank] = useState(""); // State to store selected rank


    const handleFindTeam = () => {
        navigate(`/findteam/${user}/${selectedRank.toLowerCase()}`)
    }

    return (
        <div className="p-6 mt-20 rounded-xl border-2 border-green-400 grid grid-cols-1 place-items-center">
            <p className='text-white text-4xl text-center max-w-[80%] px-4 font-bold'>
            Select the rank of the teammates you want to carry
            </p>
            <select
                type="selector"
                name="rank"
                value={selectedRank}
                onChange={(e) => setSelectedRank(e.target.value)} // Update state on change
                className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 overflow-y-auto mt-12"
                placeholder="Enter ID">
                    <option>Iron</option>
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
            
            </select>
            <button
              className="cursor-pointer p-4 bg-blue-500 rounded-md px-8 mt-6 text-white"
              onClick={handleFindTeam}>
              Find Team
            </button>
        </div>
    )
  }
  
  export default OpponentRankChoice;
