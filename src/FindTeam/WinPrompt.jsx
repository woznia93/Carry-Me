import React from 'react';
import { useParams } from 'react-router-dom';

function WinPrompt() {

    const {user, rank} = useParams()

    const handle = async (result) => {
        try {
          // Assuming you have the username available (e.g., from the user's state or props)
      
          // Construct the URL for the GET request
          const url = `http://localhost:5000/gameresult?result=${result}&user=${user}&rank=${rank}`;
      
          // Make the API call
          const response = await fetch(url);
      
          // Parse the response
          const data = await response.json();
      
          if (response.ok) {
            // Handle success (e.g., update UI or notify the user)
            console.log(data.message);
            console.log("New Elo:", data.new_elo);
          } else {
            // Handle error response
            console.error(data.message || "Error occurred while updating the game result");
          }
        } catch (error) {
          console.error("Error calling the API:", error);
        }
      };

  
  return (
    <>
      <p className='text-white text-4xl text-center max-w-[80%] px-4 font-bold mt-12'>
        Message these players and arrange a game. Document the result of your game.
      </p>
      <div className="mt-6 grid grid-cols-2 place-items-center gap-8 MT-12">
        <button
          className="cursor-pointer p-4 bg-green-500 rounded-md px-8 w-40"
          onClick={handle("win")}
        >
          Win
        </button>
        <button
          className="cursor-pointer p-4 bg-red-500 rounded-md px-8 w-40"
          onClick={handle("loss")}
        >
          Loss
        </button>
      </div>
    </>
  );
}

export default WinPrompt;