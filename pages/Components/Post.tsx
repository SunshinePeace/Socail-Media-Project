import { Avatar } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Post({profilePic, image, username , timestamp, message}) {


    return (
        <div className={styles.post}>
            <div className={styles.post__top}>
                <Avatar src={profilePic} className={styles.post__avatar} />
                <div className={styles.post__topInfo}>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
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