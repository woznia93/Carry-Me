
function SelectBoxes() {

    return (
      <>

            <h3 className='text-4xl text-center font-bold text-white overflow-visible py-4 px-4 mt-4'>
            ID:
            </h3>
            <input
              type="ID"
              name="field1"
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter ID"
            />
            <h3 className='text-4xl text-center font-bold text-white overflow-visible py-4 px-4 mt-4'>
            Discord:
            </h3>
            <input
              type="Discord"
              name="field2"
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter Discord"
            />
            <h3 className='text-4xl text-center font-bold text-white overflow-visible py-4 px-4 mt-4'>
            Rank:
            </h3>
            <select
                type="ID"
                name="field1"
                className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 overflow-y-auto"
                placeholder="Enter ID">
                    <option>Iron</option>
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Platinum</option>
                    <option>Diamond</option>
                    <option>Ascended</option>
                    <option>Immortal</option>
                    <option>Radiant</option>
            </select>
        
            <button
              className="cursor-pointer p-4 bg-blue-500 rounded-md px-8 mt-12 text-white">
              Continue
            </button>

      </>
    )
  }
  
  export default SelectBoxes
  