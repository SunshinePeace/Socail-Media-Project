import { Box, CardMedia, Typography } from '@mui/material';
import { Button, Grid, Paper, TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';  
import { BrowserRouter as Router, useNavigate, Link } from 'react-router-dom';
import { auth } from './Components/config/firebase';
import logging from './Components/config/logging';
import { Title } from './login.style';


const Login: React.FC = function () {

    const [authenticating, setAuthenticating] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    // function 1
    // function 2 ... 
    const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "auto" }

    const history = useNavigate('/');

    const SignInWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setAuthenticating(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                logging.info(result)
                history('/');
            })
            .catch(error => {
                logging.error(error);
                setAuthenticating(false)
                setError("Unable to sign in.")
            });
    }

    return (
        
        <Box
            sx={{
                display: 'inline-flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start',
                borderRadius: '15px',
                boxShadow: 10,
                m: 15,
                justifyContent: 'center',
                
                
            }}
        >

        <Box component='img' sx={{ display: 'flex', height: '60vh', alignItems: 'flex-start', borderRadius: '12px'}} alt='left' src='/90604070_p0.png' />
        <Box sx={{ display: 'flex', borderRadius: '15px'}}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid>
                            <Title> Sign In </Title>
                        </Grid>
                    <TextField type="email"
                        id="email"
                        onChange={x => setEmail(x.target.value)}
                        value={email}
                        placeholder="Enter Email address" variant='standard' fullWidth />
                    <Typography>
                        <TextField
                            autoComplete="new-password"
                            type="password"
                            id="password"
                            onChange={x => setPassword(x.target.value)}
                            value={password}
                            placeholder="Enter Password" variant='standard' fullWidth required />
                    </Typography>
                     <Link to="../Components/Phase1/forgetpw">
                     <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left'> Forget Password? </Typography>
                    </Link>
                    <Typography sx={{ fontSize: 16, fontFamily: 'Calibri' }} align='left'>Do not have an account?
                        <Link to="../Components/Phase1/signup">
                            Sign Up 
                        </Link>
                    </Typography>
                        <Button
                            disabled={authenticating}
                            onClick={() => SignInWithEmailAndPassword()}
                            color='secondary' fullWidth>
                            Sign In </Button>

                    </Paper>
                </Box>


            </Box>

        
    )


 


}

export default Login;


