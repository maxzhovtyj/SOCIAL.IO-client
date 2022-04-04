import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../../context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {fetchGetFriends} from "../../../redux/FriendsPageRedux/friendsPageFetch";

import UsersList from "../../../UI/UsersList/UsersList";

const FriendsList = () => {
    const auth = useContext(AuthContext)
    const dispatch = useDispatch()
    const friends = useSelector(state => state.friends.friends)

    useEffect(() => {
        dispatch(fetchGetFriends(auth.userId))
    }, [auth.userId, dispatch])
    return (
        <div>
            <UsersList list={friends} errorMessage={"No friends yet"}/>
        </div>
    );
};

export default FriendsList;