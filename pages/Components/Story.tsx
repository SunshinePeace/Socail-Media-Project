import { Avatar } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css'


function Story({image, profileSrc, title}) {



    return (
        <div style={{ backgroundImage: `url(${image})` }} className={styles.story}>
            <Avatar src={profileSrc} className={styles.story__avatar} />
            <h4>{title}</h4>

        </div>
    )
}


export default Story;