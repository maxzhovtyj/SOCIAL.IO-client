import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

export default function UserCard({acceptFriendshipHandler, setId, userInfo, accept = false}) {
    useEffect(() => {
        if(accept) setId(userInfo.userId)
    }, [accept, setId, userInfo.userId])
    return (
        <Card sx={{ minWidth: 200, maxWidth: 300, minHeight: 300, maxHeight: 300, display: 'grid', gridTemplateRows: "10fr 2fr" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {userInfo.nameSurname}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {userInfo.age}
                </Typography>
                <Typography variant="body2">
                    {userInfo.description}
                    <br />
                    {userInfo.hobbies}
                </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                <Button size="small">
                    <NavLink to={`/profile/${userInfo.userId}`}>Go to profile</NavLink>
                </Button>
                {accept ? <Button onClick={acceptFriendshipHandler} size="small">Accept</Button> : ''}
            </CardActions>
        </Card>
    );
}