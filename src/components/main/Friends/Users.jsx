import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsersInfo} from "../../../redux/asyncFetch";
import UsersList from "../../../UI/UsersList/UsersList";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.friends.allUsers)

    useEffect(() => {
        try {
            dispatch(fetchAllUsersInfo())
        } catch (e) {
            console.log(e)
        }
    }, [dispatch])
    return (
        <>
            <UsersList list={users} errorMessage={"No users yet"}/>
        </>
    );
};

export default Users;