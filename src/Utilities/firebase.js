// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { getFirestore, doc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAthOUPp2pu-Agb9oqvUnA8InoXD9yUZlI",
  authDomain: "react-record-shop.firebaseapp.com",
  projectId: "react-record-shop",
  storageBucket: "react-record-shop.appspot.com",
  messagingSenderId: "1069572762397",
  appId: "1:1069572762397:web:5df7ce2fc57da55b4ecff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//CREATE USER DOCUMENTS

export const db = getFirestore(app);

// Creates a new instance of authentication
export const auth = getAuth();

//Creates new entry in Authentication/Users within firebase.

export const createUserDocumentFromAuth = async (
  userAuth, 
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
