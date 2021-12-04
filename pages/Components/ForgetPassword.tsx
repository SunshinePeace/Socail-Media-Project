import { Button, TextField } from '@mui/material';
import { tryGetPreviewData } from 'next/dist/server/api-utils';
import React, { useState } from 'react';
import { useAuth } from './AuthContexts';
import styles from '../../styles/Home.module.css'



const ForgetPassword: React.FC = function () {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState("")
    const { resetPassword } = useAuth();

    async function handlereset(e) {

        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await resetPassword(email)
            setMessage("Now check your mail box for further actions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)


        }

    return (
        
        <body className={styles.loginbody}>

            <div className={styles.loginpage}>

                <div className={styles.flexbox}>

                    <p className={styles.word}>Reset Password</p>
                    <TextField type="email"
                        className={styles.word}
                        value={email}
                        id="email"
                        variant="standard"
                        placeholder="Enter Email Address"
                            onChange={x => setEmail(x.target.value)} />
                    <Button className={styles.word} type="submit" onSubmit={handlereset}> Reset Password </Button>
                    <a className={styles.word} href="../Components/LoginPage">Login</a>
                    <Button
                        className={styles.word}
                        color="secondary"
                        href="../Components/PersonalSetting"
                    >
                        Back
                    </Button>

                </div>

            </div>

        </body>
        )
}

export default ForgetPassword