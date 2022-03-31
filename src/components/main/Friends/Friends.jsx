import React from 'react';

import {NavLink, Route, Routes} from "react-router-dom";

import FriendsList from './FriendsList'
import FriendshipRequests from "./FriendshipRequests";
import UsersList from "./UsersList";

import classes from './Friends.module.css'

const Friends = (props) => {
    return (
        <div>
            <nav className={classes.navWrapper}>
                <ul>
                    <li><NavLink to="">Friends |</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="requests">Friendship requests |</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="users">Users</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<FriendsList/>}/>
                <Route path='requests' element={<FriendshipRequests/>}/>
                <Route path='users' element={<UsersList/>}/>
            </Routes>
        </div>
    );
}

export default Friends;