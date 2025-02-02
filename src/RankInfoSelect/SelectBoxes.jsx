import { useParams } from "react-router-dom"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function SelectBoxes() {

    const { user } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      id: "",
      discord: "",
      rank: "Iron",
      username: user
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    

    const handleSelect = async () => {

      console.log("aaa")
      console.log(formData)
      const url = "http://localhost:5000/SelectBoxes"
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Sending the form data
        });
  
        if (!response.ok) {
          throw new Error("Failed to set user profile");
        }
  
        const result = await response.json();
        console.log("Selection Success", result);
        
        navigate(`/select/${username}`);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    

    


    return (
      <>

            <h3 className='text-4xl text-center font-bold text-white overflow-visible py-4 px-4 mt-4'>
            ID:
            </h3>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}

              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter ID"
            />
            <h3 className='text-4xl text-center font-bold text-white overflow-visible py-4 px-4 mt-4'>
            Discord:
            </h3>
            <input
              type="text"
              name="discord"
              value={formData.discord}
              onChange={handleChange}

              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter Discord"
            />
            <h3 className='text-4xl text-center font-bold text-white overflow-visible py-4 px-4 mt-4'>
            Rank:
            </h3>
            <select
                type="selector"
                name="rank"
                value={formData.rank}
                onChange={handleChange}

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
              className="cursor-pointer p-4 bg-blue-500 rounded-md px-8 mt-12 text-white"
              onClick={handleSelect}>
              Continue
            </button>

      </>
    )
  }
  
  export default SelectBoxes
  