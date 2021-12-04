import { Button, TextField } from '@mui/material'
import { updateProfile } from 'firebase/auth'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useAuth } from './AuthContexts'
import database from './firebase'



const UpdateInformation: React.FC = function () {

    const { currentUser, changeEmail, changePassword } = useAuth()
    const [username, setusername] = useState("");
    const [photo, setphoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const update = () => {

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
        })
    }

    const force = []
    const Edit = () => {
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
        })



    }




    

    return (
        <div>
            <div>
                <h1>Personal Information</h1>
                <TextField variant="standard" value={username} placeholder="Enter Username" onChange={x => setusername(x.target.value)} />
                <TextField variant="standard" value={photo} placeholder="PhotoURL(Leave it if you do not hace)" onChange={x => setphoto(x.target.value)} />
                <Button onClick={update}> Update Personal Information </Button>

                <h2>Login Information</h2>
                <TextField variant="standard" value={email} type="email" placeholder="Enter new Email Address" onChange={x => setEmail(x.target.value)} />
                <TextField variant="standard" value={password} type="password" placeholder="Leave blank if it is same" onChange={x => setPassword(x.target.value)} />
                <TextField variant="standard" value={confirm} type="password" placeholder="Leave blank if it is same" onChange={x => setConfirm(x.target.value)} />
                <Button onClick={Edit}> Update Login Information </Button>


            </div>
        </div>



        
        )
}

export default UpdateInformation