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


import { 
  getDatabase, 
  ref, 
  set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"; // realtime db

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

  addDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXmKYdUK5eSiiVHZjjsN6zCbqqwXz_Yew",
  authDomain: "hackathon-module-ii.firebaseapp.com",
  projectId: "hackathon-module-ii",
  storageBucket: "hackathon-module-ii.firebasestorage.app",
  messagingSenderId: "963168470282",
  appId: "1:963168470282:web:6a161efec21bc61a82e6f3",
  measurementId: "G-LKRH8ZZNS8"
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