import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");

    // ✅ Extract username from email and store in localStorage
    const username = email.split("@")[0];
    localStorage.setItem("username", username);

    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-500 px-4">
      
      {/* Animated Blobs */}
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-pink-400 rounded-full opacity-30 blur-3xl animate-pulse top-5 left-5"></div>
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-ping top-1/2 right-5 -translate-y-1/2"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1 text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold mb-1 text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition active:scale-95"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
