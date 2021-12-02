import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import database, { auth } from '../firebase'

const AuthContext = createContext({
    currentUser: null // Created 
})





export default function AuthContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub

    }, [])


    const value = {
        currentUser
    }


    return (
        <AuthContext.Provider value={value}>

            {children}
        </AuthContext.Provider>
        
        
        )
}