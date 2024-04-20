// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9YiZKnG7bUN50SCbcsnrDPvgZ8BgU3rA",
  authDomain: "react-firebase-chat-app-d9eb0.firebaseapp.com",
  projectId: "react-firebase-chat-app-d9eb0",
  storageBucket: "react-firebase-chat-app-d9eb0.appspot.com",
  messagingSenderId: "716482090282",
  appId: "1:716482090282:web:8f73ef49bbf3c0d8defa53",
  measurementId: "G-73B1PE22HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);