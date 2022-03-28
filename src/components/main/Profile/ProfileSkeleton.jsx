import React from 'react';
import {Skeleton} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import classes from './Profile.module.css'

const profileWrapper = {
    display: "grid",
    gridTemplateColumns: "3fr 7fr",
    gap: "1rem"
}

const infoStyles = {
    width: "40%"
}

const ProfileSkeleton = () => {
    return (
        <div className={classes.profileWrapper}>
            <div style={profileWrapper}>
                <Skeleton className="post__user-img" variant={"circular"} width={"100px"} height={"100px"}/>
                <div style={infoStyles}>
                    <Skeleton variant={"text"}/>
                    <Skeleton variant={"text"}/>
                </div>
            </div>
            <div className={classes.inputNewPost}>
                <Skeleton variant={"text"} width={"100%"} height={"100px"}/>
                <LoadingButton loading variant="outlined">Submit</LoadingButton>
            </div>
            <Skeleton variant={"text"} />
            {/*<div className={classes.postsWrapper}>{posts.map(post => <Post key={post.id} postInfo={post}/>)}</div>*/}
        </div>
    );
};

export default ProfileSkeleton;