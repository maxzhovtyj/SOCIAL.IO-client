import React from 'react';
import {Avatar} from "@mui/material";

const profileWrapper = {
    display: "grid",
    gridTemplateColumns: "2fr 8fr",
    gap: "1rem"
}

const infoStyles = {
    width: "60vw"
}

const ProfileInfo = ({profileInfo}) => (
    <div style={profileWrapper}>
        <Avatar className="post__user-img" sx={{width: 100, height: 100}} alt="userImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
        <div style={infoStyles}>
            <h2>{profileInfo.username}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem incidunt minus nesciunt possimus vero!</p>
        </div>
    </div>
);

export default ProfileInfo;