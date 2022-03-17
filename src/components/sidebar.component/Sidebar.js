import "./Sidebar.css"
import {NavLink} from "react-router-dom";

function Sidebar() {
    return <div className="sidebar">
        <nav>
            <ul className="sidebar-list">
                <li><NavLink to="/">News</NavLink></li>
                <li><NavLink to="/dialogs/*">Dialogs</NavLink></li>
                <li><NavLink to="/friends">Friends</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    </div>;
}

export default Sidebar;
