import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and register

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const url = isLogin ? "http://localhost:5000/login" : "http://localhost:5000/register";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Sending the form data
      });

      if (!response.ok) {
        throw new Error(isLogin ? "Failed to log in" : "Failed to register");
      }

      const result = await response.json();
      console.log(isLogin ? "Login Success:" : "Register Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }

    navigate("/select")

  };

  return (
    <div className="text-white text-lg text-center leading-snug container mt-12 px-12 font-jetbrains">
      <div className="">
        {/* Conditional Rendering for Login/Register */}
        {isLogin ? (
          <div className="w-full grid grid-cols-1 place-items-center gap-y-4">
            <input
              type="text"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter username"
            />
            <input
              type="password"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter password"
            />
            <button
              className="cursor-pointer p-4 bg-blue-500 rounded-md px-8"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 place-items-center gap-y-4">
            <input
              type="text"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter username"
            />
            <input
              type="email"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter email"
            />
            <input
              type="password"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Enter password"
            />
            <input
              type="password"
              name="field4"
              value={formData.field4}
              onChange={handleChange}
              className="bg-white text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Confirm password"
            />
            <button
              className="cursor-pointer p-4 bg-blue-500 rounded-md px-8"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        )}

        {/* Toggle between login and register */}
        <div className="mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="cursor-pointer text-blue-500 underline"
          >
            {isLogin ? "Need an account? Register here" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
