import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGetFriendshipRequests} from "../../../redux/asyncFetch";
import {AuthContext} from "../../../context/AuthContext";
import BasicCard from "../../../UI/BasicCard";

const FriendshipRequests = () => {
    const auth = useContext(AuthContext)
    const dispatch = useDispatch()
    const requests = useSelector(state => state.friends.friendsRequests)
    useEffect(() => {
        dispatch(fetchGetFriendshipRequests(auth.userId))
    }, [])
    return (
        <div>
            {requests.map((user => <BasicCard userInfo={user.userInfo}/>))}
        </div>
    );
};

export default FriendshipRequests;