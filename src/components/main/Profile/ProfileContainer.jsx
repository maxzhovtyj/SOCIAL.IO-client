import React, {useContext, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import {fetchNewUserPost, fetchUserPosts} from "../../../redux/NewsPageRedux/newsPageFetch";
import {fetchUserInfo} from "../../../redux/asyncFetch";
import {fetchSendFriendshipRequest} from "../../../redux/FriendsPageRedux/friendsPageFetch";

const ProfileContainer = () => {
    const params = useParams()
    const auth = useContext(AuthContext)

    const dispatch = useDispatch()
    const userPosts = useSelector(state => state.profile.userPosts)
    const userInfo = useSelector(state => state.profile.userInfo)

    const [newPostTextAreaValue, setNewPostTextAreaValue] = useState('')
    const [userIsProfileOwner, setUserIsProfileOwner] = useState(false)
    const [userIsFriend, setUserIsFriend] = useState(true)

    const userIsFriendHandler = useMemo(() => {
        return userInfo?.friends?.includes(auth.userId)
    }, [userInfo?.friends, auth.userId])

    const userIsOwnerHandler = useMemo(() => {
        return auth.userId === params.id
    }, [auth.userId, params.id])

    const addNewPost = () => {
        let newPost = {
            authorId: auth.userId,
            authorName: userInfo.nameSurname,
            text: newPostTextAreaValue,
            likes: 0
        }
        dispatch(fetchNewUserPost(newPost))
        setNewPostTextAreaValue('')
    }

    const sendFriendshipRequestHandler = () => {
        try {
            let data = {
                requestId: params.id,
                userId: auth.userId
            }
            dispatch(fetchSendFriendshipRequest(data))
        } catch (e) {}
    }

    useEffect(() => {
        try {
            const getData = async () => {
                await dispatch(fetchUserInfo(params.id))
                setUserIsFriend(userIsFriendHandler)
                setUserIsProfileOwner(userIsOwnerHandler)
                await dispatch(fetchUserPosts(params.id))
            }
            getData()
        } catch (e) {
            console.log(e)
        }
    }, [auth.userId, dispatch, params.id, userIsFriendHandler, userIsOwnerHandler])

    return (
        <Profile isOwner={userIsProfileOwner}
                 isFriend={userIsFriend}
                 userPosts={userPosts}
                 userInfo={userInfo}
                 newPost={newPostTextAreaValue}
                 setNewPost={setNewPostTextAreaValue}
                 sendFriendshipRequestHandler={sendFriendshipRequestHandler}
                 addNewPost={addNewPost}
        />
    )
}

export default ProfileContainer;