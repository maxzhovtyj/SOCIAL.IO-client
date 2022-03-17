import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem({id, userName}) {
    return (
        <div className={classes.dialogsItem}>
            <NavLink to={"/dialogs/" + id}>{userName}</NavLink>
        </div>
    )
}

export default DialogItem;