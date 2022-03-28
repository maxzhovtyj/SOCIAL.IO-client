import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator} from "../../../redux/profilePageReducer";

import {useHttp} from "../../../hooks/http.hook";
import {useParams} from "react-router-dom";

import Profile from "./Profile";
import ProfileSkeleton from "./ProfileSkeleton";

const ProfileContainer = () => {
    const {request, loading} = useHttp()
    const params = useParams()

    const dispatch = useDispatch()
    const posts = useSelector(state => state.profilePageReducer.posts)

    const [userInfo, setUserInfo] = useState({})
    const [newPost, setNewPost] = useState('')
    const [responseStatus, setResponseStatus] = useState(null)

    const onSetNewPost = (event) => {
        setNewPost(event.target.value)
    }

    const sendNewPost = () => {
        try {
            let newPostSend = {
                id: Date.now(), text: newPost, name: 'Max Zhovtaniuk', likes: 0
            }
            if (!newPost.trim()) {
                throw new Error("Empty post")
            }
            let newPostAction = addPostActionCreator(newPostSend)
            dispatch(newPostAction)
        } catch (error) {
            console.error(error)
        } finally {
            setNewPost('')
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await request(`/auth/userInfo?id=${params.id}`)
                setUserInfo(response)
                setResponseStatus('ok')
            } catch (e) {
                setResponseStatus(null)
                console.log(e)
            }
        }

        fetchData()
    }, [params.id])

    if (loading) {
        return <ProfileSkeleton/>
    }

    else if (responseStatus && !loading) {
        return <Profile profileInfo={userInfo} newPost={newPost} onSetNewPost={onSetNewPost} sendNewPost={sendNewPost} posts={posts}/>
    }
    else {
        return "User was not found"
    }
}

export default ProfileContainer;