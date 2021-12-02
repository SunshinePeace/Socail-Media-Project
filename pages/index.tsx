import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import AuthContextProvider, { useAuth } from './Components/AuthContexts'
import Feed from './Components/Feed'
import Header from './Components/Header'
import Login from './Components/Login'
import SideBar from './Components/SideBar'
import Widgets from './Components/Widgets'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { StateProvider, useStateValue } from './Components/Useless/StateProvider'
import reducer, { initialState } from './Components/Useless/Reducer'

export default function Home() {


    
    const  currentUser  = useAuth(); // CurrentUser === user



    return (


            
      <div className={styles.app}>
      <Head>
        <title>Facebook 2.0</title>
            </Head>

            <React.StrictMode>
                <StateProvider initialState={initialState} reducer={reducer}>
                    

            {!currentUser ? (<Login />)
                : (
                    <>
                        <Header />

                        <div className={styles.app__body}>
                            <SideBar />
                            <Feed />
                            <Widgets />
                            </div>
                            
                            </>
                               
                
                        )}
                </StateProvider>
                    
            </React.StrictMode>, document.getElementById('root')
    </div>
  )
}
