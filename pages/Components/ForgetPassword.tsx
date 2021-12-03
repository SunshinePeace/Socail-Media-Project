import { Button, TextField } from '@mui/material';
import { tryGetPreviewData } from 'next/dist/server/api-utils';
import React, { useState } from 'react';
import { useAuth } from './AuthContexts';




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
        
        <div>
            <p>Reset Password</p>
            <TextField type="email" 
                value={email} 
                id="email"
                variant="standard"
                placeholder="Enter Email Address"
                onChange={x => setEmail(x.target.value)} />
            <div>
                <Button type="submit" onSubmit={handlereset}> Reset Password </Button>
            </div>
            <a href="../Components/LoginPage">Login</a>
        </div>
        
        
        )
}

export default ForgetPassword