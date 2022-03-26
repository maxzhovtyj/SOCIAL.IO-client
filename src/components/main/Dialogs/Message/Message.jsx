import React from 'react';
import classes from "../Dialogs.module.css";

const Message = ({messageContent}) => (
    <div className={classes.message}>
        <p>{messageContent}</p>
    </div>
)

export default Message;