import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, twitterProvider } from '../firebaseConfig';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Google login successful');
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Twitter login
  const handleTwitterLogin = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
      alert('Twitter login successful');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
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
          <button
            className="bg-blue-500 text-white font-bold px-4 w-1/5 mx-auto py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
            type="submit"
          >
            Login Now
          </button>
          <p className='text-blue-500 text-center mt-4'>
            Don't have an account?{' '}
            <Link className='text-violet-500 font-semibold underline' to="/register">
              Register here
            </Link>
          </p>

          <button
            type="button"
            className="bg-red-500 text-white font-bold px-4 w-1/5 mx-auto py-2 rounded-lg mt-4 hover:bg-red-600 transition-all"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>

          <button
            type="button"
            className="bg-black text-white font-bold px-4 w-1/5 mx-auto py-2 rounded-lg mt-4 hover:bg-gray-800 transition-all"
            onClick={handleTwitterLogin}
          >
            Login with X (Twitter)
          </button>

          {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
