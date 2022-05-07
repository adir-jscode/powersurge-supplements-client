// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtVKzXFi1h94w1EZbmpobBFuTUYnM7VPo",
  authDomain: "powersurge-supplements.firebaseapp.com",
  projectId: "powersurge-supplements",
  storageBucket: "powersurge-supplements.appspot.com",
  messagingSenderId: "722184205228",
  appId: "1:722184205228:web:0d71ee47ae49b469ccc009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;