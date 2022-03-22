import {NavLink} from "react-router-dom";

function Post({postInfo: {text, name, likes}}) {
    return (
        <div className="post__item-wrapper">
            <img
                className="post__user-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"
                alt="userImg"
            />
            <div className="post__item">
                <p className="post__item-text">
                    {text}
                </p>
                <div className="post__item-bottom">
                    <span className="post__item-username">
                        <NavLink to="/profile">{name}</NavLink>
                    </span>
                    <div className="post__item-likes">
                        <span>{likes}</span>
                        <button>Like</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post