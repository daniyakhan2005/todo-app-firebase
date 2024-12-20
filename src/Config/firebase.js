// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhseOUDJ7l40K58DmLv8znC-qhZv9O68A",
  authDomain: "todoapp-466d5.firebaseapp.com",
  projectId: "todoapp-466d5",
  storageBucket: "todoapp-466d5.firebasestorage.app",
  messagingSenderId: "766411904904",
  appId: "1:766411904904:web:f67e1af973a22fec040c3d",
  measurementId: "G-WEGCMJVQ68"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)
