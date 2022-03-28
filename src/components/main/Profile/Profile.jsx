import React from 'react';

import classes from './Profile.module.css'

import Post from "../Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TetxArea";

const Profile = ({profileInfo, newPost, onSetNewPost, sendNewPost, posts}) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profileInfo={profileInfo}/>
            <div className={classes.inputNewPost}>
                <TextArea value={newPost} onChange={onSetNewPost}/>
                <Button onClick={sendNewPost} style={{marginTop: ".5rem"}} endIcon={<SendIcon/>}>Post</Button>
            </div>
            <div className={classes.postsWrapper}>{posts.map(post => <Post key={post.id} postInfo={post}/>)}</div>
        </div>

    )
}

export default Profile;