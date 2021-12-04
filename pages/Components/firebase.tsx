import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAYqlWAxZfVFNhVgsuGtrXNlo3c8Op3QB0",
    authDomain: "social-media-d8fd6.firebaseapp.com",
    projectId: "social-media-d8fd6",
    storageBucket: "social-media-d8fd6.appspot.com",
    messagingSenderId: "936530922097",
    appId: "1:936530922097:web:6126823385c6067fd169d0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(); // Google Login 
const storage = getStorage(firebaseApp);



// Email and Password Login 

export { auth, provider ,storage};
export default database;


