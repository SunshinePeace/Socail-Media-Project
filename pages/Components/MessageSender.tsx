import { Avatar,Button } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useAuth } from './AuthContexts';
import Hidden from '@mui/material/Hidden';
import database from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



const MessageSender: React.FC = function () {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { currentUser } = useAuth()

    const handleSubmit = async(e) => {
       
        e.preventDefault()
        const docRef = await addDoc(collection(database, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: currentUser.photoURL,
            username: currentUser.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    }


    return (
        <div className={styles.MessageSender}>

            <div className={styles.MessageSender__top}>
                <Avatar src={currentUser.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(x) => setInput(x.target.value)}
                        type="text"
                        placeholder={`What's on your mind, ${currentUser.displayName}?`}
                        className={styles.MessageSender__input} />
                    <input
                        value={imageUrl}
                        onChange={(x) => setImageUrl(x.target.value)}
                        placeholder="image URL (Optional)" />
                </form>

                <Button onClick={handleSubmit} type="submit">
                   Submit
                </Button>
            </div>

            <div className={styles.MessageSender__bottom}>
                <div className={styles.MessageSender__option}>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className={styles.MessageSender__option}>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>

                </div>

                <div className={styles.MessageSender__option}>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>

                </div>

            </div>

        </div>
        )
}

export default MessageSender;