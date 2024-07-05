// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJwSJCDdzB2dHg1OGeqaOMf6UIrb-3mFo",
  authDomain: "passman-mjay.firebaseapp.com",
  projectId: "passman-mjay",
  storageBucket: "passman-mjay.appspot.com",
  messagingSenderId: "389999745310",
  appId: "1:389999745310:web:1262b30d40adcad10dd10f",
  measurementId: "G-PBZT8TNLHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
