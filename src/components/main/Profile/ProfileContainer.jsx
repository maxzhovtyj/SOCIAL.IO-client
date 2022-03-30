import React, {useContext, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profilePageReducer";

// import {useParams} from "react-router-dom";

import Profile from "./Profile";
import ProfileSkeleton from "./ProfileSkeleton";
import {AuthContext} from "../../../context/AuthContext";

const ProfileContainer = () => {
    const auth = useContext(AuthContext)

    //const params = useParams()

    const dispatch = useDispatch()
    const posts = useSelector(state => state.profilePageReducer.userPosts)

    const [userPosts, setUserPosts] = useState(posts)

    const [isOwner, setIsOwner] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [newPostText, setNewPostText] = useState('')
    const [responseStatus, setResponseStatus] = useState(null)

    const onSetNewPost = (event) => {
        setNewPostText(event.target.value)
    }

    const sendNewPost = async () => {
        try {
            let newPost = {
                authorId: auth.userId,
                authorName: userInfo.username,
                text: newPostText,
            }
            if (!newPost.text.trim()) {
                throw new Error("Empty post")
            }
            let newPostAction = addPostActionCreator(newPost)
            dispatch(newPostAction)
        } catch (error) {
            console.error(error)
        } finally {
            setNewPostText('')
        }
    }

    if (false) return <ProfileSkeleton/>
    else if (responseStatus) {
        return <Profile isOwner={isOwner} profileInfo={userInfo} newPost={newPostText} onSetNewPost={onSetNewPost}
                        sendNewPost={sendNewPost} posts={userPosts}/>
    } else {
        return "User was not found"
    }
}

export default ProfileContainer;