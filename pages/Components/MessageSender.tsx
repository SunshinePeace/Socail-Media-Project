import { Avatar,Button } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';



const MessageSender: React.FC = function () {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {


      //  e.preventDefault()


        setInput("");
        setImageUrl("");
    }


    return (
        <div className={styles.MessageSender}>

            <div className={styles.MessageSender__top}>
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(x) => setInput(x.target.value)}
                        type="text"
                        placeholder="What's on your mind"
                        className={styles.MessageSender__input} />
                    <input
                        value={imageUrl}
                        onChange={(x) => setImageUrl(x.target.value)}
                        placeholder="image URL (Optional)" />
                </form>

                <Button onClick={handleSubmit} type="submit" >
                    Hidden Submit
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