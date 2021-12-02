import { Button, Link } from '@mui/material';
import { TextField } from '@mui/material';
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

            <div className={styles.loginpage}>
            <div className={styles.loginpage__left}>
                <img src="/90604070_p0.png" alt= "" />
            </div>

            <div className={styles.loginpage__right}>
                <p>Sign In</p>
                <TextField type="email"
                    id="email"
                    onChange={x => setEmail(x.target.value)}
                    value={email}
                    placeholder="Enter Email"
                    variant="standard" />
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
                href = "/"
            >
                Sign In
            </Button>
            <p>Do not have account?
                <Link href="../Components/SignUp"> Sign Up </Link>
            </p>
            <ErrorText error={error} />
           
            </div>



    )
}

export default LoginPage