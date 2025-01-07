// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxiyR3ZiwhEGlJlPTZy7WeUEW_MbejB0M",
  authDomain: "elevated-frames.firebaseapp.com",
  projectId: "elevated-frames",
  storageBucket: "elevated-frames.firebasestorage.app",
  messagingSenderId: "886552085163",
  appId: "1:886552085163:web:cfa011df42abd9e3e0edee",
  measurementId: "G-Z18C2XXJYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
