import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const auth = useContext(AuthContext)
    return (
        <nav className={s.header}>
            <ul className={s.list}>
                <li className={s.logo}>
                    <NavLink to="/">
                        Social.io
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/links">Links</NavLink>
                </li>
                <li>
                    <NavLink to={`/profile/${auth.userId}`}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
}


export default Header