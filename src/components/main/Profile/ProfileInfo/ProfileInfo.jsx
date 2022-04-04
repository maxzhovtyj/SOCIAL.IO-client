import React from 'react';
import {Avatar, Button} from "@mui/material";

const profileWrapper = {
    display: "flex",
    flexDirection: 'column',
    gap: "1rem",
    margin: '.5rem'
}

const infoStyles = {
    width: "60vw"
}

const ProfileInfo = ({sendFriendshipRequestHandler, isOwner, isFriend, profileInfo: {nameSurname, description, age, hobbies}}) => {
    return (
        <div style={profileWrapper}>
            <Avatar style={{backgroundColor: "transparent", border: '4px solid white'}} sx={{width: 135, height: 135}} alt="userImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"/>
            <div style={infoStyles}>
                <h2>{nameSurname}</h2>
                <div>
                    <p>{age}</p>
                    <p>{description}</p>
                    <p>{hobbies}</p>
                </div>
                {
                    isOwner || isFriend
                        ? ''
                        : <Button onClick={sendFriendshipRequestHandler} variant="contained" size={"small"}>Add to friends</Button>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;