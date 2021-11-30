import { Avatar } from '@mui/material'
import React from 'react'
import styles from '../../styles/Home.module.css'


function SideBarRow({ src, Icon, title }) {


    return (

        <div className={styles.sidebarRow}>
            <div className={styles.sidebarRow__MuiSvgIcon}> { /*Bug fixed 2*/}
                {src && <Avatar src={src} />}            
                {Icon && <Icon />}
            </div>
            <h4>{title}</h4>            
            </div>
    )
}


export default SideBarRow