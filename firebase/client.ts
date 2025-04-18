// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBOW2IXyyw4Tfi-6RvyakUeMp21UzMj2o8",
  authDomain: "prepwise-20602.firebaseapp.com",
  projectId: "prepwise-20602",
  storageBucket: "prepwise-20602.firebasestorage.app",
  messagingSenderId: "651895718268",
  appId: "1:651895718268:web:76b72e97e917517b4324f9",
  measurementId: "G-QHNQ56CLKM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);