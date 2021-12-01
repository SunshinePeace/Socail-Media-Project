import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from '../../styles/Home.module.css'

const UserType: React.FC = function () {
    
   
    return (
    <div className={styles.UserType}>
        <Button variant="contained"> Public </Button>
        <Button variant="contained"> HSU </Button>
    </div>
   )

}

export default UserType