import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";


const AuthContext = createContext({

    currentUser: null,

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
        // listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, user => onChange)

        // unsubscribe to the listener when unmounting
        return () => unsubscribe()
    }, [])

    return state
}



export default function AuthContextProvider({ children }) {

    const { initializing, currentUser } = useSession()

    function signin(email, password) {
        return signInWithEmailAndPassword(auth,email,password)
    }


    const value = { currentUser, signin }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)


