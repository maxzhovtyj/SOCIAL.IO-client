import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <nav className={s.header}>
      <ul className={s.list}>
        <li>
          <NavLink to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
              alt="logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/links">Links</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={s.login}>Sing In</NavLink>
          <NavLink to="/auth" className={s.auth}>Sing Up</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Header