import React from 'react';

import classes from './Post.module.css'
import Post from "./Post";

const PostsList = ({postsList}) => {
    return (
        <div className={classes.postsWrapper}>
            {postsList.map((post, index) => <Post key={index} postInfo={post}/>)}
        </div>
    );
};

export default PostsList;