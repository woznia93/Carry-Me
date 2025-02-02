function BotScreen() {
    return (
      <div className="w-[100%] grid-cols-1 grid place-items-center">
        <h2 className='text-7xl text-center font-bold bg-gradient-to-r 
           from-green-400 via-blue-500 to-purple-600
           bg-clip-text text-transparent overflow-visible py-4 px-4 mb-6 mt-40'>
          You Are in the Lower Ranks
        </h2>
        <p className='text-white text-4xl text-center max-w-[80%] px-4 font-bold'>
          A higher-ranked player will contact you soon for your match. Stay ready and check your messages regularly.<br></br><br></br>
          Get to platinum or above to compete!
        </p>
      </div>
    )
  }
  
  export default BotScreen;
  