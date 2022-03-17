import React, {useRef} from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import classes from './Dialogs.module.css'

const Dialogs = ({state: {dialogsList, dialogContent}}) => {
    let newPost = useRef(null);
    function addNewPost() {
        let text = newPost.current.value;
        alert(text)
    }
    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogsList}>
                {dialogsList.map(user => <DialogItem userName={user.name} id={user.id} key={user.id}/>)}
            </div>
            <div className={classes.messageContent}>
                {dialogContent.map(message => <Message messageContent={message.messageContent} key={message.id}/>)}
                <div className={classes.messageSend}>
                    <textarea ref={newPost} className={classes.messageInput} />
                    <Button onClick={addNewPost} className={classes.messageBtn} disableRipple endIcon={<SendIcon/>}/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;