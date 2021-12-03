import React from 'react'
import styles from '../../styles/Home.module.css'
import SideBarRow from './SideBarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAuth } from './AuthContexts';

const SideBar: React.FC = function () {

    const { currentUser } = useAuth();
    return (
        <div className={styles.sidebar}>
            <SideBarRow src={currentUser.photoURL} Icon={""} title={currentUser.displayName} />
            <SideBarRow src ="" Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SideBarRow src=""Icon={EmojiFlagsIcon} title = "Pages" />
            <SideBarRow src=""Icon={PeopleIcon} title="Friends"/>
            <SideBarRow src=""Icon={ChatIcon} title="Messagers" />
            <SideBarRow src=""Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow src=""Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow src=""Icon={ExpandMoreIcon} title="Marketplace" />
        </div>
        )
}


export default SideBar

