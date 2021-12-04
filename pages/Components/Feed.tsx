import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import database from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';


const Feed: React.FC = function () {

    const [posts, setPosts] = useState([])


    useEffect(
        () => {
            const collectionRef = collection(database, "posts")
            const q = query(collectionRef, orderBy("timestamp", "desc"))
                onSnapshot(q, (snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

            )
        },
        []


    )





    return (
        <div className={styles.feed}>
            <StoryReel />
            <MessageSender />



            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timestamp}
                    username={post.username}
                    image={post.image}

                />
                ))}


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