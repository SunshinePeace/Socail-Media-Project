import { Avatar } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Post({profilePic, image, username , timestamp, message}) {

    //const result = Intl.DateTimeFormat('zh-HK', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
    const mulliseconds = timestamp * 1000;
    return (
        <div className={styles.post}>
            <div className={styles.post__top}>
                <Avatar src={profilePic} className={styles.post__avatar} />
                <div className={styles.post__topInfo}>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp * 1000).toLocaleTimeString() + ` at ` + new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000).toLocaleDateString()}</p>
                </div>


            </div>

            <div className={styles.post__bottom}>
                <p>{message}</p>
            </div>

            <div className={styles.post__image}>
                <img src={image} alt="" />

            </div>



            <div className={styles.post__options}>
                <div className={styles.post__option}>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className={styles.post__option}>
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className={styles.post__option}>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className={styles.post__option}>
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>





        </div>
        
        )
}

export default Post;