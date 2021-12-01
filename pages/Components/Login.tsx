
import { Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import styles from '../../styles/Home.module.css'
import { auth, Provider } from "./firebase";

const Login: React.FC = function () {

    const signIn = () => {


        signInWithPopup(auth, Provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        

    }

    return (
        <div className={styles.login}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt= "" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt="" />

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
        )
}

export default Login;