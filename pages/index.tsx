import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Feed from './Components/Feed'
import Header from './Components/Header'
import Login from './Components/Login'
import SideBar from './Components/SideBar'
import Widgets from './Components/Widgets'
import { useAuth } from './Components/AuthContexts'
import LoginPage from './Components/LoginPage'


export default function Home() {

    // const {currentUser} = useAuth(); // CurrentUser === user
    const { currentUser } = useAuth()

    return (        
      <div className={styles.app}>
      <Head>
        <title>Facebook 2.0</title>
            </Head>

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

            
             </div>
                    

    )

   
}

