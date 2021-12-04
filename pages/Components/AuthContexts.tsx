import { Update } from "@mui/icons-material";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from "firebase/auth";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { auth } from "./firebase";



const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
    resetPassword: () => Promise,
    changeEmail: () => Promise,
    changePassword: () => Promise,
})


export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)

        })
    return () => {
        unsubscribe()
    }


    },[])

    function register(email, password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth,email)
    }

    function changeEmail(email) {
        return updateEmail(currentUser,email)
    }

    function changePassword(password) {
        return updatePassword(currentUser,password)
    }




    const value = {
        currentUser,
        register,
        login,
        logout,
        resetPassword,
        changeEmail,
        changePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
            </AuthContext.Provider>
        
        )
}



