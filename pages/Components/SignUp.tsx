import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import React, { useRef } from 'react';
import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import { useAuth } from "./AuthContexts";
import logging from './Utils/logging';
import { Link } from '@mui/material';
import ErrorText from './Utils/Error';
import { addDoc, collection, doc } from 'firebase/firestore';
import database, { auth } from './firebase';

const SignUp: React.FC = function () {

    const [registering, setRegistering] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");
    const [error, setError] = useState<string>("");

    const { register } = useAuth()

    const TraditionalSignUp = () => {



        
        if (error !== "") setError('');


        if (password !== confirm) {

            setError("Passwords do not match")
        }

        else {
            setRegistering(true)

            register(email, password)
                .then(result => {
                    addDoc(collection(database, 'Users'), {
                        UserName: user,
                        EmailAddress: email,
                        Password: password

                    });

                    logging.info(result)




                })
                .catch(error => {
                    logging.error(error);

                    if (error.code === 'auth/weak-password') {
                        setError("Please enter a stronger password")

                    }

                    else if (error.code === 'auth/email-already-in-use') {

                        setError("Email already in use.")

                    }

                    else {
                        setError('Error in this moment. Please try it later.')
                    }

                    setRegistering(false)

                })
        }
        }



  
            
            
           



    return (

        <body className={styles.loginbody}>

            <div className={styles.loginpage}>

                <div className={styles.flexbox}>
                    <p className={styles.SignUpP}>Registery Page</p>

                    <div className={styles.loginpage_user}>
                        <TextField
                            id="user"
                            onChange={x => setUser(x.target.value)}
                            value={user}
                            placeholder="Enter Username"
                            variant="standard" />
                    </div>

                    <div className={styles.loginpage_email}>
                        <TextField type="email"
                            id="email"
                            onChange={x => setEmail(x.target.value)}
                            value={email}
                            placeholder="Enter Email"
                            variant="standard" />
                    </div>

                    <div className={styles.loginpage_pw}>
                        <TextField
                            autoComplete="new-password"
                            type="password"
                            id="password"
                            onChange={x => setPassword(x.target.value)}
                            value={password}
                            placeholder="Enter Password"
                            variant="standard" />
                    </div>

                    <div className={styles.loginpage_confirm}>
                        <TextField
                            autoComplete="new-password"
                            type="password"
                            id="confirm"
                            onChange={x => setConfirm(x.target.value)}
                            value={confirm}
                            placeholder="Confirmation Password"
                            variant="standard" />
                    </div>

                    <Button
                        disabled={registering}
                        color="secondary"
                        onClick={() => TraditionalSignUp()}
                        href="../Components/LoginPage"
                    >
                        Sign Up
                    </Button>
                    <small>
                        <p className='m-1 text-center'>Already have an account?
                            <Link href="../Components/LoginPage"> Sign In </Link>
                        </p>
                    </small>
                    <ErrorText error={error} />

                </div>
            
        </div>

        </body>

    )
}

export default SignUp