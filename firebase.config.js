/*import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import{
   getAuth,
   GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     sendEmailVerification,
  
  


}from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCXmKYdUK5eSiiVHZjjsN6zCbqqwXz_Yew",
  authDomain: "hackathon-module-ii.firebaseapp.com",
  projectId: "hackathon-module-ii",
  storageBucket: "hackathon-module-ii.firebasestorage.app",
  messagingSenderId: "963168470282",
  appId: "1:963168470282:web:6a161efec21bc61a82e6f3",
  measurementId: "G-LKRH8ZZNS8"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   const auth = getAuth();
   const provider = new GoogleAuthProvider();


     export{
    auth,
     provider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
  updatePassword,
     GoogleAuthProvider,
    signInWithPopup,
     sendPasswordResetEmail,
 signOut
     }*/


 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,

  onAuthStateChanged,

  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"; // realtime db

import {
  getFirestore,
  doc,
  setDoc, serverTimestamp,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  onSnapshot,

  deleteDoc,
  where,
  or,
  and,

  addDoc 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDhqdz3sIC-xFVcCwjaZ4BTx3vfgXAcBaQ",
  authDomain: "class-task-98475.firebaseapp.com",
  projectId: "class-task-98475",
  storageBucket: "class-task-98475.firebasestorage.app",
  messagingSenderId: "987094592502",
  appId: "1:987094592502:web:38d7e8c28b0798b92175d7",
  measurementId: "G-RN8ZMG2ZSN"
  
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app); // realtime db
const db = getFirestore(app);


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,


  ref,
  set,
  database,

  db,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  updateDoc,
  collection,
  getDocs,

  query,
  onSnapshot,

  deleteDoc,
  where,
   or,
   and,
   addDoc
}