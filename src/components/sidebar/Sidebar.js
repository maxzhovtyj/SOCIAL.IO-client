import "./Sidebar.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Button} from "@mui/material";

function Sidebar() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const clickHandler = () => {
        auth.logout()
        navigate("/")
    }
    return <div className="sidebar">
        <nav>
            <ul className="sidebar-list">
                <li><NavLink to="/">News</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/friends">Friends</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
                <Button onClick={clickHandler} variant="outlined" size="small">Logout</Button>
            </ul>
        </nav>
    </div>;
}

export default Sidebar;
