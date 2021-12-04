import { Button, TextField } from '@mui/material'
import { updateProfile } from 'firebase/auth'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useAuth } from './AuthContexts'
import database from './firebase'
import styles from '../../styles/Home.module.css'



const UpdateInformation: React.FC = function () {

    const { currentUser, changeEmail, changePassword } = useAuth()
    const [username, setusername] = useState("");
    const [photo, setphoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState<boolean>(false)

    const update = () => {

        setLoading(true)

        updateProfile(currentUser, {

            displayName: username,
            photoURL: photo
        }).then(async (result) => {
            const docRef = await addDoc(collection(database, "users", JSON.stringify(localStorage.getItem("UID"))), {
                UserName: username,
                Photourl: photo
            })
            console.log(result)

        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }

    const force = []
    const Edit = () => {

        setLoading(true)

        if (email !== currentUser.email) {
            force.push(changeEmail(email))
        }

        if (password.length !== 0 && password === confirm) {
            force.push(changePassword(password))
        }

        Promise.all(force).then(async (result) => {


            const alphaRef = doc(database, "user", JSON.stringify(localStorage.getItem("UID")) )
            const docRef = await updateDoc(alphaRef, {
                EmailAddress: email,
                Password: password
            })
            console.log(result)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })



    }




    

    return (

        <body className={styles.loginbody}>

            <div className={styles.loginpage}>

                <div className={styles.flexbox}>
                            <h2 className={styles.word}>Personal Information</h2>

                            <TextField className={styles.word} variant="standard" value={username} placeholder="Enter Username" onChange={x => setusername(x.target.value)} />
                            <TextField className={styles.word} variant="standard" value={photo} placeholder="PhotoURL(Leave it if you do not hace)" onChange={x => setphoto(x.target.value)} />
                            <Button className={styles.word} onClick={update} disabled={loading}> Update Personal Information </Button>

                            <h2 className={styles.word}>Login Information</h2>
                            <TextField className={styles.word} variant="standard" value={email} type="email" placeholder="Enter new Email Address" onChange={x => setEmail(x.target.value)} />
                            <TextField className={styles.word} variant="standard" value={password} type="password" placeholder="Leave blank if it is same" onChange={x => setPassword(x.target.value)} />
                            <TextField className={styles.word} variant="standard" value={confirm} type="password" placeholder="Leave blank if it is same" onChange={x => setConfirm(x.target.value)} />
                            <Button className={styles.word} onClick={Edit} disabled={loading}> Update Login Information </Button>
                            <Button
                                className={styles.word}
                                color="secondary"
                                href="../Components/PersonalSetting"
                            >
                                Back
                            </Button>
                </div>

            </div>

        </body>

        )
}

export default UpdateInformation