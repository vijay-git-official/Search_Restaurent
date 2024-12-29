// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wMDoXxz9-zS_LQDs3mLfw6nwA5aJQik",
  authDomain: "search-b16df.firebaseapp.com",
  projectId: "search-b16df",
  storageBucket: "search-b16df.firebasestorage.app",
  messagingSenderId: "169654960659",
  appId: "1:169654960659:web:a8f829d068988da29bb5e6",
  measurementId: "G-PDE788QBZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

