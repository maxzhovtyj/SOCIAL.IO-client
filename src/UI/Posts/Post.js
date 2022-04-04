import * as React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Post.module.css'

export default function MediaCard({postInfo: {authorId, authorName, text, likes}}) {
    return (
        <div className={classes.item}>
            <div style={{padding: '.5rem'}}>
                <h5><NavLink to={`/profile/${authorId}`}>{authorName}</NavLink></h5>
                <p>{text}</p>
            </div>
        </div>
    );
}