// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT1ZuLfvqLzd3Lq8alGzOFpLsg7o82feA",
    authDomain: "tour-booking-feb24.firebaseapp.com",
    projectId: "tour-booking-feb24",
    storageBucket: "tour-booking-feb24.appspot.com",
    messagingSenderId: "549922237538",
    appId: "1:549922237538:web:714b648cf6771f03e3b53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;