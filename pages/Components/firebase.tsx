import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAYqlWAxZfVFNhVgsuGtrXNlo3c8Op3QB0",
    authDomain: "social-media-d8fd6.firebaseapp.com",
    projectId: "social-media-d8fd6",
    storageBucket: "social-media-d8fd6.appspot.com",
    messagingSenderId: "936530922097",
    appId: "1:936530922097:web:6126823385c6067fd169d0"
};






// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const database = getFirestore();
const auth = getAuth();
const Provider = new GoogleAuthProvider();



export { auth, Provider }
export default database;