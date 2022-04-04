import React from 'react';

import classes from './UsersList.module.css'
import UserCard from "../UserCard";

const UsersList = ({list, errorMessage, setId, accept, acceptFriendshipHandler}) => {
    return (
        <div className={classes.listWrapper}>
            {list.length ? list.map(item => <UserCard userInfo={item} key={item.userId} setId={setId} accept={accept}
                                                      acceptFriendshipHandler={acceptFriendshipHandler}/>) : errorMessage}
        </div>
    );
};

export default UsersList;