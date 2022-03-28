import React from 'react';

import classes from './Profile.module.css'

import Post from "../Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextArea from "../../../UI/TetxArea";

const Profile = ({isOwner, profileInfo, newPost, onSetNewPost, sendNewPost, posts}) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profileInfo={profileInfo}/>
            {
                isOwner
                ?
                <div className={classes.inputNewPost}>
                <TextArea value={newPost} onChange={onSetNewPost}/>
                <Button onClick={sendNewPost} style={{marginTop: ".5rem"}} endIcon={<SendIcon/>}>Post</Button>
                </div>
                : ''
            }
            {!posts.isEmpty ? <div className={classes.postsWrapper}>{posts.map((post, index) => <Post key={index} postInfo={post}/>)}</div> : "This user has not posts yet"}
        </div>
    )
}

export default Profile;