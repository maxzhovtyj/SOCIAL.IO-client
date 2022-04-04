import "./Sidebar.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

import classes from "./Sidebar.module.css"

import {Button} from "@mui/material";

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ChatIcon from '@mui/icons-material/Chat';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar(props) {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const clickHandler = () => {
        auth.logout()
        navigate("/")
    }
    return <div className={classes.sidebar}>
        <nav>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarItem}>
                    <div className={classes.sidebarItemWrapper}>
                        <NavLink to="/"><ArticleOutlinedIcon/><span>News</span></NavLink>
                    </div>
                </li>
                <li className={classes.sidebarItem}>
                    <div className={classes.sidebarItemWrapper}>
                        <NavLink to="/dialogs"><ChatOutlinedIcon/><span>Dialogs</span></NavLink>
                    </div>
                </li>
                <li className={classes.sidebarItem}>
                    <div className={classes.sidebarItemWrapper}>
                        <NavLink to="/friends"><PeopleAltOutlinedIcon/><span>Friends</span></NavLink>
                    </div>
                </li>
                <li className={classes.sidebarItem}>
                    <div className={classes.sidebarItemWrapper}>
                        <NavLink to="/settings"><SettingsOutlinedIcon/><span>Settings</span></NavLink>
                    </div>
                </li>
            </ul>
        </nav>
        <Button style={{margin: '.5rem 0 0 8px'}} onClick={clickHandler} variant="outlined" size="small">Logout</Button>
    </div>;
}

export default Sidebar;
