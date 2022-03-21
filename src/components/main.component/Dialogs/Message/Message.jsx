import React from 'react';
import classes from "../Dialogs.module.css";

const Message = ({messageContent}) => (
    <span className={classes.message}>
        {messageContent}
    </span>
)

export default Message;