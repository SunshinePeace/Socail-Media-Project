import { Button } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css'
import { auth, provider } from "./firebase"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Login: React.FC = function () {

    


    const signIn = () => {
        
            
    }



    return (

        <body className={styles.loginbody}>

            <div className={styles.loginpage}>

                <div className={styles.flexbox}>

                    <div>
                        <img src="/Logout.png" width="150" height="150" alt="" />
                    </div>

                    <h3 className={styles.word}>
                        Logout Successful
                    </h3>

                    <Button className={styles.loginpage_btn} type="submit" onClick={signIn} href="../Components/LoginPage">
                        Back To Sign In
                    </Button>
                </div>
            
        </div>

        </body>



        
        )


}


export default Login;