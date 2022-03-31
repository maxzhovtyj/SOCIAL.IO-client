import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";

export default function BasicCard({userInfo}) {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 400 }}>
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
            <CardActions>
                <Button size="small">
                    <NavLink to={`/profile/${userInfo.userId}`}>Go to profile</NavLink>
                </Button>
            </CardActions>
        </Card>
    );
}