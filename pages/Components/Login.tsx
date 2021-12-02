import { Button } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css'
import { auth, provider } from "./firebase"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Login: React.FC = function () {

    


    const signIn = () => {
        
            
    }



    


    return (
        <div className={styles.login}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"

                    alt=""
                />

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"

                    alt=""
                />


            </div>

            <Button type="submit" onClick={signIn} href="../Components/LoginPage">
                Sign In
            </Button>

        </div>
        
        )


}


export default Login;