
function Register() {

    return (
      <>
        <div className=" text-white text-lg text-center leading-snug container mt-12  overflow-visible px-12 font-jetbrains">
        <div className="w-full overflow-visible grid grid-cols-1 place-items-center gap-y-10">
            <input type="text" className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" placeholder="Enter text" />
            <input type="text" className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" placeholder="Enter text" />
            <input type="text" className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" placeholder="Enter text" />
            <input type="text" className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" placeholder="Enter text" />

            <button className="cursor-pointer p-4 bg-blue-500 rounded-md px-8">Submit</button>
        </div>
        </div>
      </>
    )
  }
  
  export default Register
  