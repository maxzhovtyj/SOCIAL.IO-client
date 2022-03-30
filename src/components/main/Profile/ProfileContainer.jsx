import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import {
    fetchNewUserPost, fetchUserInfo, fetchUserPosts
} from "../../../redux/asyncFetch";


const ProfileContainer = () => {
    const [newPostTextAreaValue, setNewPostTextAreaValue] = useState('')

    const params = useParams()
    const auth = useContext(AuthContext)

    const [userIsProfileOwner, setUserIsProfileOwner] = useState(params.id === auth.userId)

    const dispatch = useDispatch()
    const userPosts = useSelector(state => state.profile.userPosts)
    const userInfo = useSelector(state => state.profile.userInfo)

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

    useEffect(() => {
        try {
            dispatch(fetchUserInfo(params.id))
            dispatch(fetchUserPosts(params.id))
            setUserIsProfileOwner(params.id === auth.userId)
        } catch (e) {
            console.log(e)
        }
    }, [auth.userId, dispatch, params.id])
    return (
        <Profile isOwner={userIsProfileOwner}
                 userPosts={userPosts}
                 userInfo={userInfo}
                 newPost={newPostTextAreaValue}
                 setNewPost={setNewPostTextAreaValue}
                 addNewPost={addNewPost}
        />
    )
}

export default ProfileContainer;