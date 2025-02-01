import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-white text-lg text-center leading-snug container mt-12 px-12 font-jetbrains">
      <div className="w-full grid grid-cols-1 place-items-center gap-y-4">
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          placeholder="Enter text"
        />
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          placeholder="Enter text"
        />
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleChange}
          className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          placeholder="Enter text"
        />
        <input
          type="text"
          name="field4"
          value={formData.field4}
          onChange={handleChange}
          className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          placeholder="Enter text"
        />

        <button
          className="cursor-pointer p-4 bg-blue-500 rounded-md px-8"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
