import { Button, Link } from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useRef, useState } from 'react';
import styles from '../../styles/Home.module.css'
import { signin, signup } from "./AuthContexts";
import ErrorText from './Utils/Error';
import logging from './Utils/logging';
import { BrowserRouter as Router  } from 'react-router-dom';
import SignUp from './SignUp';
import { useStateValue } from './Useless/StateProvider';
import { actionTypes } from './Useless/Reducer';
// import { useCookies } from 'react-cookie';




const LoginPage: React.FC = function () {


    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
   // const [cookies, setCookie] = useCookies(['user']);







    const TraditionalSignIn = () => {
        if (error !== '') setError('')
        
        setAuthenticating(true);
        signin(email, password)
            .then(result => {
                logging.info(result);
                localStorage.setItem('Email', email);



            })
            .catch(error => {
                logging.error(error)
                setAuthenticating(false)
                setError("Unable To Sign In. Please try it later") // More Command

            });
    }



    return (
            
        <body className={styles.loginbody}>

            <div className={styles.loginpage}>

            <div className={styles.flexbox}>

                    <div className={styles.png}>
                        <img src="/90604070_p0.png" width="250" height="200" alt="" />
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

                    <Button
                        disabled={authenticating}
                        color="secondary"
                        onClick={() => TraditionalSignIn()}
                        href="/"
                    >
                        Sign In
                    </Button>
                    <p>Do not have account?
                        <Link href="../Components/SignUp"> Sign Up </Link>
                    </p>
                    <ErrorText error={error} />

            </div>

            </div>
        </body>



    )
}

export default LoginPage