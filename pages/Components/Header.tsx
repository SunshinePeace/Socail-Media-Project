import React, { useState } from 'react';
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
import { useAuth } from './AuthContexts';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




const Header: React.FC = function () {

    const currentUser  = useAuth();


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        logout();
        setAnchorEl(null);
    }







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
                    <h4>{currentUser.currentUser}</h4>
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

                <IconButton
                    id = 'basic-button'
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >
                    <ExpandMoreIcon />
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>




            </div>


            </div>
        )
}

export default Header