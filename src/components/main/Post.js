import {NavLink} from "react-router-dom";
import {Avatar, Button} from "@mui/material";
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import {FavoriteBorderOutlined} from "@mui/icons-material";

function Post({postInfo: {authorId, authorName, text, likes}}) {

    return (
        <div className="post__item-wrapper">
            <Avatar className="post__user-img" sx={{width: 56, height: 56}} alt="userImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
            <div className="post__item">
                <p className="post__item-text">
                    {text}
                </p>
                <div className="post__item-bottom">
                    <NavLink to={`/profile/${authorId}`} className="post__item-username">{authorName}</NavLink>
                    <div className="post__item-likes">
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