import { Avatar,Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import styles from '../../styles/Home.module.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useAuth } from './AuthContexts';
import Hidden from '@mui/material/Hidden';
import database, { storage } from './firebase';
import { addDoc, collection, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable, uploadString } from '@firebase/storage';
import { Remove, UploadFile } from '@mui/icons-material';



const MessageSender: React.FC = function () {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { currentUser } = useAuth()
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null);

    const handleSubmit = async(e) => {


        if (input !== '') {
            e.preventDefault()
            const docRef = await addDoc(collection(database, "posts"), {
                message: input,
                timestamp: serverTimestamp(),
                profilePic: currentUser.photoURL,
                username: currentUser.displayName,
                image: imageUrl
            }).then(async docm => {
                if (imageToPost) {



                    const a = ref(storage, (`posts/ ${docm.id}`));
                    const uploadTask = await uploadString(a, imageToPost, 'data_url');
                    const url = await getDownloadURL(uploadTask.ref);
                    await setDoc(doc(database, "posts", docm.id), { image: url }, { merge: true });
                }

                    removeImage();
                }


                )
        }

        else {
            alert("Enter Something")
        }
        setInput("");
        setImageUrl("");
        


    }

    const addImagePost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readEvent) => {
            setImageToPost(readEvent.target.result)
        }


    }

    const removeImage = () => {
        setImageToPost(null);
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

            {imageToPost && (

                <div onClick={removeImage} className={styles.imageToPost}>
                    <img className={styles.imageToPost__Image} src={imageToPost} alt="" />
                    <p className={styles.imageToPost__Text}>Remove </p>
                </div>
                
                )}


            <div className={styles.MessageSender__bottom}>
                <div className={styles.MessageSender__option}>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div onClick={() => filePickerRef.current.click()} className={styles.MessageSender__option}>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <input ref={filePickerRef} onChange={addImagePost} type="file" hidden />
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