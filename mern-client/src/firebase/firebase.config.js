// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9tOuiVo4jJNdsbqTFTeEg8ObXZSIeMyY",
  authDomain: "mern-book-inventory-f7389.firebaseapp.com",
  projectId: "mern-book-inventory-f7389",
  storageBucket: "mern-book-inventory-f7389.firebasestorage.app",
  messagingSenderId: "284281070689",
  appId: "1:284281070689:web:6964046306adef053ab620",
  measurementId: "G-1RJ72T428D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default  app;