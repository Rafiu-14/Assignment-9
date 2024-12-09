import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      alert('Registration successful');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center flex-grow p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <form className='grid grid-cols-1 space-y-4' onSubmit={handleRegister}>
            <h1 className='text-4xl uppercase text-center font-bold text-[#4b5563]'>Register Here!</h1>
            <input 
              className='bg-gray-100 font-medium rounded-md p-2 hover:bg-blue-100 transition-all w-full'
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Name" 
              required 
            />
            <input 
              className='bg-gray-100 font-medium rounded-md p-2 hover:bg-blue-100 transition-all w-full'
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
            />
            <input 
              className='bg-gray-100 font-medium rounded-md p-2 hover:bg-blue-100 transition-all w-full'
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
            />
            <button className='bg-blue-500 text-white w-full font-medium rounded-md p-2 hover:bg-blue-600 transition-all' type="submit">Register Now</button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

