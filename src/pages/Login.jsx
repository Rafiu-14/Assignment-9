// src/pages/Login.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here (e.g., Firebase authentication)
  };

  return (
    <div>
       <Navbar></Navbar> 
      <div className='mt-20'>
      <h1 className='text-5xl mb-10 mt-5 text-center font-mono font-bold text-[#4b5563]'>Login Page</h1>
      <form className='grid grid-cols-1' onSubmit={handleLogin}>
        <input
          className='bg-gray-200 w-1/5 rounded-lg text-xl p-2 mx-auto mt-5'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className='bg-gray-200 w-1/5 rounded-lg text-xl p-2 mx-auto mt-4'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="bg-blue-500 text-white px-4 w-1/5 mx-auto py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login; // Ensure you have a default export
