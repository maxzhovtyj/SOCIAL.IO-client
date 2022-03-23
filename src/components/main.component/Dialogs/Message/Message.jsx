import React from 'react';
import classes from "../Dialogs.module.css";

const Message = ({messageContent}) => (
    <p className={classes.message}>
        {messageContent}
    </p>
)

export default Message;