import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchAcceptFriendshipRequest,
    fetchGetFriendshipRequests,
    fetchSendFriendshipRequest
} from "../../../redux/asyncFetch";
import {AuthContext} from "../../../context/AuthContext";
import BasicCard from "../../../UI/BasicCard";

const FriendshipRequests = () => {
    const [friendId, setFriendId] = useState(null)
    const auth = useContext(AuthContext)
    const dispatch = useDispatch()
    const requests = useSelector(state => state.friends.friendsRequests)
    useEffect(() => {
        dispatch(fetchGetFriendshipRequests(auth.userId))
    }, [auth.userId, dispatch])

    const acceptFriendshipHandler = () => {
        let data = {
            userId: auth.userId,
            friendId
        }
        dispatch(fetchAcceptFriendshipRequest(data))
    }

    return (
        <div>
            {(requests.length)
                ? requests.map((user => <BasicCard key={user.userId}
                                                   userInfo={user}
                                                   accept={true}
                                                   acceptFriendshipHandler={acceptFriendshipHandler}
                                                   setId={setFriendId}/>))
                : "No friendship requests yet"}
        </div>
    );
};

export default FriendshipRequests;