// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBASPxO6QXDHB7FxdSemnhY8wNQQoeA8k",
    authDomain: "mc-challenge3-group5.firebaseapp.com",
    projectId: "mc-challenge3-group5",
    storageBucket: "mc-challenge3-group5.firebasestorage.app",
    messagingSenderId: "243082560726",
    appId: "1:243082560726:web:f65778aa464b023ca3f577",
    measurementId: "G-CGQRY7WX4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);