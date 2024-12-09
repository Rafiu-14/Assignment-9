import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrCdxNNRr40bHPPaYYoMTR87Y_pLIYZD8",
  authDomain: "assignment9-12a57.firebaseapp.com",
  projectId: "assignment9-12a57",
  storageBucket: "assignment9-12a57.appspot.com",
  messagingSenderId: "1054644671293",
  appId: "1:1054644671293:web:315c7f82d89cf7ae93ab54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
