import React, {useContext} from 'react';

import {NavLink, Route, Routes} from "react-router-dom";

import FriendsList from './FriendsList'
import FriendshipRequests from "./FriendshipRequests";
import UsersList from "../../../UI/UsersList/UsersList";

import classes from './Friends.module.css'
import Users from "./Users";

const Friends = (props) => {
    return (
        <div>
            <nav className={classes.navWrapper}>
                <ul>
                    <li><NavLink to={``}>Friends |</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={`requests`}>Friendship requests |</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={`users`}>Users</NavLink></li>
                </ul>
            </nav>
            <div style={{paddingTop: '.5rem'}}>
                <Routes>
                <Route path='' element={<FriendsList/>}/>
                <Route path='requests' element={<FriendshipRequests/>}/>
                <Route path='users' element={<Users/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default Friends;