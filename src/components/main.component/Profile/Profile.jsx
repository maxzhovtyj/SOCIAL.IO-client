import React, {useState} from 'react';

import classes from './Profile.module.css'

import Post from "../Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TetxArea";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.profilePage.posts)

    const [newPost, setNewPost] = useState('')

    const onSetNewPost = (event) => {
        setNewPost(event.target.value)
    }

    const sendNewPost = () => {
        try {
            let newPostSend = {
                id: Date.now(),
                text: newPost,
                name: 'Max Zhovtaniuk',
                likes: 0
            }
            if (!newPost.trim()) {
                throw "Empty post"
            }
            dispatch({type: 'ADD_POST', newPostSend})
            setNewPost('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo/>
            <div className={classes.inputNewPost}>
                <TextArea value={newPost} onChange={onSetNewPost}/>
                <Button onClick={sendNewPost} endIcon={<SendIcon/>}>Post</Button>
            </div>
            <div className={classes.postsWrapper}>{posts.map(post => <Post key={post.id} postInfo={post}/>)}</div>
        </div>

    )
}

export default Profile;