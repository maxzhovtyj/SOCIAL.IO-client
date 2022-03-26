import {NavLink} from "react-router-dom";
import {Avatar, Button} from "@mui/material";
import {useState} from "react";

function Post({postInfo: {text, name, likes}}) {
    const [postLikes, setPostLikes] = useState(likes)
    const [likeToggle, setLikeToggle] = useState(false)

    const handler = () => {
        if (likeToggle === false) {
            setPostLikes(prevState => prevState + 1)
            setLikeToggle(true)
        } else {
            setPostLikes(prevState => prevState - 1)
            setLikeToggle(false)
        }
    }
    return (
        <div className="post__item-wrapper">
            <Avatar className="post__user-img" sx={{width: 56, height: 56}} alt="userImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
            <div className="post__item">
                <p className="post__item-text">
                    {text}
                </p>
                <div className="post__item-bottom">
                    <NavLink to="/profile" className="post__item-username">{name}</NavLink>
                    <div className="post__item-likes">
                        <span style={{marginRight: ".5rem"}}>{postLikes}</span>
                        <Button onClick={handler} variant="text" size={"small"}>Like</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post