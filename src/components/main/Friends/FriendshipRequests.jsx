import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../../context/AuthContext";
import UserCard from "../../../UI/UserCard";
import {
    fetchAcceptFriendshipRequest,
    fetchGetFriendshipRequests
} from "../../../redux/FriendsPageRedux/friendsPageFetch";
import UsersList from "../../../UI/UsersList/UsersList";

const FriendshipRequests = () => {
    const [friendId, setFriendId] = useState(null)
    const auth = useContext(AuthContext)
    const dispatch = useDispatch()
    const requests = useSelector(state => state.friends.friendsRequests)
    useEffect(() => {
        dispatch(fetchGetFriendshipRequests(auth.userId))
    }, [auth.userId, requests, dispatch])

    const acceptFriendshipHandler = () => {
        let data = {
            userId: auth.userId,
            friendId
        }
        dispatch(fetchAcceptFriendshipRequest(data))
    }

    return (
        <div>
            <UsersList list={requests} errorMessage={"No friendship requests yet"} setId={setFriendId} accept={true}
                       acceptFriendshipHandler={acceptFriendshipHandler}/>
        </div>
    );
};

export default FriendshipRequests;