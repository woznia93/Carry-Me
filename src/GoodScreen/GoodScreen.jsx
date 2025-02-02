import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import OpponentRankChoice from "./OpponentRankChoice";

function GoodScreen() {
    
    const navigate = useNavigate()

    return (
      <div className="w-[100%] grid-cols-1 grid place-items-center">
        <h2 className='text-7xl text-center font-bold bg-gradient-to-r 
           from-green-400 via-blue-500 to-purple-600
           bg-clip-text text-transparent overflow-visible py-4 px-4 mb-6 mt-20'>
          You Are in the Higher Ranks
        </h2>
        <OpponentRankChoice/>
        <button className="cursor-pointer p-4 bg-green-400 rounded-md px-8 mt-12 text-white"
        onClick={() => navigate("/leaderboard")}>
            Leaderboard
        </button>
      </div>
    )
  }
  
  export default GoodScreen;
