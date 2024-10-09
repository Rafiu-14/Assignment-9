// import React, { useState, useEffect } from 'react';
// import { updateProfile } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (auth.currentUser) {
//       setName(auth.currentUser.displayName || '');
//       setPhotoURL(auth.currentUser.photoURL || '');
//       setLoading(false);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await updateProfile(auth.currentUser, { displayName: name, photoURL });
//       alert('Profile updated successfully!');
//     } catch (error) {
//       alert('Error updating profile: ' + error.message);
//     }
//     setLoading(false);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Profile</h2>
//       <form onSubmit={handleUpdateProfile}>
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
//           <label className="block text-gray-700">Photo URL</label>
//           <input
//             type="text"
//             className="border rounded w-full p-2"
//             value={photoURL}
//             onChange={(e) => setPhotoURL(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
