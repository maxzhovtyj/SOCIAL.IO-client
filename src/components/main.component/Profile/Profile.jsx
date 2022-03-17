import React from 'react';

import classes from './Profile.module.css'

import Post from "../Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TetxArea";

const Profile = ({state: {posts, addNewPost}}) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo/>
            <TextArea/>
            <Button onClick={addNewPost} endIcon={<SendIcon />}>Post</Button>
            {posts.map(post => <Post key={post.id} state={post} />)}
        </div>

    )
}

export default Profile;