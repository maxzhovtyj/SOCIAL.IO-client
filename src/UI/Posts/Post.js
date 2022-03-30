import React from "react";

import classes from "./Post.module.css";

import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {FavoriteBorderOutlined} from "@mui/icons-material";

function Post({postInfo: {authorId, authorName, text, likes}}) {

    return (
        <div className={classes.postItemWrapper}>
            <Avatar className={classes.postUserImg} sx={{width: 56, height: 56}} alt="userImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
            <div className={classes.postItem}>
                <p className={classes.postItemText}>
                    {text}
                </p>
                <div className={classes.postItemBottom}>
                    <NavLink to={`/profile/${authorId}`} className={classes.postItemUsername}>{authorName}</NavLink>
                    <div className={classes.postItemLikes}>
                        <span>{likes}</span>
                        <IconButton size={"small"}>
                            <FavoriteBorderOutlined/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post