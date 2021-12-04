import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from './AuthContexts';
import styles from '../../styles/Home.module.css'


const PersonalSetting: React.FC = function () {

    const { currentUser } = useAuth();


    return (
        <body className={styles.loginbody}>

            <div className={styles.loginpage}>

                <div className={styles.flexbox}>
                    <div>
                        <Button className={styles.loginpage_pw} href = "../Components/UpdateInformation" color="secondary">
                            Update Information
                        </Button>
                        <div>
                            <Button className={styles.loginpage_pw} href="../Components/ForgetPassword" color="success">
                                Reset Password
                            </Button>
                            <div>
                                <Button className={styles.loginpage_pw} color="error">
                                    Delete Accounts
                                </Button>
                            </div>
                            <Button
                                className={styles.word}
                                color="secondary"
                                href=".."
                            >
                                Back
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </body>
        
        
        )

}


export default PersonalSetting