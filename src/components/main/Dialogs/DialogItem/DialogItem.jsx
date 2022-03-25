import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem({id, userName}) {
    return (
        <li className={classes.dialogsItem}>
            <NavLink to={"/dialogs/" + id}>{userName}</NavLink>
        </li>
    )
}

export default DialogItem;