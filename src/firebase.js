// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQbjYRwbbX7wjgKoK80oH-fXo7YW5HDpQ",
  authDomain: "fitness-ko1l98.firebaseapp.com",
  projectId: "fitness-ko1l98",
  storageBucket: "fitness-ko1l98.appspot.com",
  messagingSenderId: "713824077545",
  appId: "1:713824077545:web:1b4ee7ccea0bdb711b1278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
