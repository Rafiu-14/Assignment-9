import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './index.css';
import EstateDetails from './pages/EstateDetails';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebaseConfig';

const App = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/estate/:id" element={<EstateDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
