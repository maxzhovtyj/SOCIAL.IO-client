import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsersInfo} from "../../../redux/asyncFetch";

import classes from './UsersList.module.css'
import BasicCard from "../../../UI/BasicCard";

const UsersList = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.friends.allUsers)

    useEffect(() => {
        try {
            dispatch(fetchAllUsersInfo())
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <div className={classes.listWrapper}>
            {allUsers.map((user, index) => <BasicCard key={index} userInfo={user}/>)}
        </div>
    );
};

export default UsersList;