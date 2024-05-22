// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE5oTN7UK6v1o5uf6ph1-CWvqZIwayT2k",
    authDomain: "mern-auth-da8d2.firebaseapp.com",
    projectId: "mern-auth-da8d2",
    storageBucket: "mern-auth-da8d2.appspot.com",
    messagingSenderId: "745983664766",
    appId: "1:745983664766:web:fc79f951b03c7ccba2ee2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);