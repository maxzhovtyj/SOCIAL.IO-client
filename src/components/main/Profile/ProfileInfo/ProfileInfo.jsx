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

const ProfileInfo = ({profileInfo: {nameSurname, description}}) => {
    return (
        <div style={profileWrapper}>
            <Avatar className="post__user-img" sx={{width: 100, height: 100}} alt="userImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
            <div style={infoStyles}>
                <h2>{nameSurname}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;