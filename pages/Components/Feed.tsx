import React from 'react';
import styles from '../../styles/Home.module.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';


const Feed: React.FC = function () {



    return (
        <div className={styles.feed}>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://coolthemestores.com/wp-content/uploads/2021/06/purple-wallpaper-background-1.jpg"              
                timestamp="This is a timestamp"
                message="My feeling"
                username="SunshinePeace"
                image="https://images.unsplash.com/photo-1517504734587-2890819debab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"


            />

            <Post
                profilePic="https://coolthemestores.com/wp-content/uploads/2021/06/purple-wallpaper-background-1.jpg"
                timestamp="This is a timestamp"
                message="My feeling"
                username="SunshinePeace"
                image="https://wallpaperaccess.com/full/270183.jpg"


            />








        </div>
)
}


export default Feed;