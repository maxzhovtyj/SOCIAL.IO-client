import React from 'react';
import {Avatar} from "@mui/material";

const profileWrapper = {
    display: "flex",
    alignItems: "center"
}
const infoStyles = {
    width: "40%"
}

const ProfileInfo = (props) => (
    <div style={profileWrapper}>
        <Avatar className="post__user-img" sx={{width: 100, height: 100}} alt="userImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
        <div style={infoStyles}>
            <h3>Username</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem incidunt minus nesciunt possimus vero!</p>
        </div>
    </div>
);

export default ProfileInfo;