import React from 'react';
import styles from '../../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontOutlinedIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Header: React.FC = function () {


    const [active, setActive] = React.useState(false);
    return (

        <div className={styles.header}>
            <div className={styles.header__left}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt =""/>
            
                <div className={styles.header__input}>
                <SearchIcon />
                <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className={styles.header__center}>
                <div className={styles.header__option}>   {/*Fix Big*/}
                    <div className={styles.header__option__MuiSvgIcon}>
                            <HomeIcon fontSize="large" />
                        </div> 
            
                    </div>
                <div className={styles.header__option}>
                    <div className={styles.header__option__MuiSvgIcon}>
                        <FlagIcon fontSize="large" />
                    </div>
                </div>
                <div className={styles.header__option}>
                    <div className={styles.header__option__MuiSvgIcon}>
                        <SubscriptionsIcon fontSize="large" />
                        </div>
                </div>
                        <div className={styles.header__option}>
                            <div className={styles.header__option__MuiSvgIcon}>
                    <StorefrontOutlinedIcon fontSize="large" />
                </div></div>
                        <div className={styles.header__option}>
                            <div className={styles.header__option__MuiSvgIcon}>
                                <SupervisedUserCircleIcon fontSize="large" />
                                </div>
                </div>
            </div>


            <div className={styles.header__right}>
                <div className={styles.header__info}>
                    <Avatar />
                    <h4>SunshinePeace</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>



            </div>


            </div>
        )
}

export default Header