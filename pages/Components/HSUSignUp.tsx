import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from '../../styles/Home.module.css'
import { useAuth } from './AuthContexts';
import { addDoc, collection } from 'firebase/firestore';
import database from './firebase';
import logging from './Utils/logging';


const HSUSignUp: React.FC = function () {


    const [registering, setRegistering] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [programme, setProgramme] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [SID, setSID] = useState<string>("");
    

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
                        Password: password,
                        Programme: programme,
                        Year: year,
                        SID: SID

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
        <div className={styles.UserType}>
            <div className={styles.publicUserType}>If you are HSU students, please click this button.
                <div className={styles.UserType}><Button variant="contained"> HSU </Button></div>
            </div>
            <div className={styles.hsuUserType}>Else, please click this button.
                <div className={styles.UserType}><Button variant="contained"> Public </Button></div>
            </div>
            <div className={styles.backLogin}>If you want to back to login page, please click this button.
                <div className={styles.UserType}><Button variant="contained"> Back </Button></div>
            </div>
        </div>
    )

}

export default HSUSignUp