import React, { useState } from 'react';

const Login = ({ userData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requestHandler = (e) => {
    e.preventDefault();
    userData(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-14 w-11/12 max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Say Hello!</h2>
        <form onSubmit={requestHandler} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-2 transition-all bg-transparent text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-2 transition-all bg-transparent text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <button 
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-pink-400 to-cyan-400 text-white py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
