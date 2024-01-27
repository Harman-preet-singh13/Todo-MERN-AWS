import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/auth/register", {
        username,
        password,
      });

      alert("Successfully registered. Redirecting to Login page")
      console.log("Navigating to login");
      navigate("/login")
    } catch (error) {
      if(error){
        console.log("Error:", error)
        setErrorMsg(error.response.data.message || "An error occurred while registering!!")
        console.log(errorMsg);
      }

      console.log("register error:", error)
    }
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Register
          </h3>
          <form onSubmit={handleRegister} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="text"
                className="text-sm font-semibold text-gray-500"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <p className="text-red-500">
                {errorMsg}
              </p>
            </div>
            <div className="mx-auto">
              <button
                type="submit"
                className="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Register
              </button>
            </div>

            <div className="grid justify-items-end">
              <p className="">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
