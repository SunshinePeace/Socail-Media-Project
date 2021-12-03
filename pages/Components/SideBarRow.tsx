import { Avatar } from '@mui/material'
import React from 'react'
import styles from '../../styles/Home.module.css'
import { useAuth } from './AuthContexts';


function SideBarRow({ src, Icon, title }) {

    const { currentUser } = useAuth();
    return (

        <div className={styles.sidebarRow}>
            <div className={styles.sidebarRow__MuiSvgIcon}> { /*Bug fixed 2*/}
                {src && <Avatar src={currentUser.photoURL} />}
                {Icon && <Icon />}
            </div>
            <h4>{title}</h4>            
            </div>
    )
}


export default SideBarRow