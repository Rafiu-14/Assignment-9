
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [photoURL, setPhotoURL] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Add Firebase registration logic here
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <form onSubmit={handleRegister}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             className="border rounded w-full p-2"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             className="border rounded w-full p-2"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
