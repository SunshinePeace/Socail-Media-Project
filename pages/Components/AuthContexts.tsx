import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import database, { auth } from './firebase'

const AuthContext = createContext({
    currentUser: null // Created 
})

export const useSession = () => {

    const [state, setState] = useState(() => {
        const currentUser = auth.currentUser
        return {
            initializing: !currentUser,
            currentUser,

        }



    })

    function onChange(currentUser) {
        setState({ initializing: false, currentUser })
    }


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => onChange)       
        return unsub

    }, [])

    return state

}




export default function AuthContextProvider({ children }) {

    const { initializing, currentUser } = useSession()
    //const getEmail = localStorage.getItem('email');

    //const GetUser = doc(database, "user", getEmail);
    //const UserSnap = getDoc(GetUser);
    function logout() {
        return signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error)
        })
    }
    const value = { currentUser, logout }

    
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth,email,password)
}

export function signin(email, password) {
    return signInWithEmailAndPassword(auth,email,password)
}



