import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from '../../styles/Home.module.css'


const Choice: React.FC = function () {



    return (

        <body className={styles.loginbody}>

            <div className={styles.loginpage}>
                <div className={styles.flexbox}>
                    <div>
                            <div className={styles.publicUserType}>If you are HSU students, please click this button.
                            <div className={styles.UserType}>
                                <Button className={styles.BtnJumpPage} href="../Components/HSUSignUp" variant="contained"> HSU </Button></div>
                            </div>
                            <div className={styles.hsuUserType}>Else, please click this button.
                            <div className={styles.UserType}>
                                <Button className={styles.BtnJumpPage} href="../Components/SignUp" variant="contained"> Public </Button></div>
                            </div>
                            <div className={styles.backLogin}>If you want to back to login page, please click this button.
                            <div className={styles.UserType}>
                                <Button className={styles.BtnJumpPage} href="../Components/LoginPage" variant="contained"> Back </Button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
    )

}

export default Choice