import React from 'react';

import classes from './Profile.module.css'

import Post from "../../../UI/Posts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TetxArea";
import PostsList from "../../../UI/Posts/PostsList";

const Profile = ({isOwner, userPosts, userInfo, newPost, setNewPost, addNewPost}) => {
    const newPostHandler = (event) => {
        setNewPost(event.target.value)
    }
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profileInfo={userInfo}/>

            {
                isOwner
                    ?
                    <div className={classes.inputNewPost}>
                        <TextArea value={newPost} onChange={newPostHandler}/>
                        <Button onClick={addNewPost} style={{marginTop: ".5rem"}} endIcon={<SendIcon/>}>Post</Button>
                    </div>
                    : ''
            }

            {
                userPosts.length !== 0
                    ? <PostsList postsList={userPosts}/>
                    : "This user has not posts yet"
            }
        </div>
    )
}

export default Profile;