import React, {useState} from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import classes from './Dialogs.module.css'
import {useDispatch, useSelector} from "react-redux";

const Dialogs = () => {
    const dispatch = useDispatch()
    const dialogsList = useSelector(state => state.dialogsPage.dialogsList)
    const dialogContent = useSelector(state => state.dialogsPage.dialogContent)

    const [newMessage, setNewMessage] = useState()

    function newMessageSend() {
        let newDialogMessage = {id: Date.now(), messageContent: newMessage}
        dispatch({type: 'ADD_MESSAGE', newDialogMessage})
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogsList}>
                {dialogsList.map(user => <DialogItem userName={user.name} id={user.id} key={user.id}/>)}
            </div>
            <div className={classes.messageContent}>
                {dialogContent.map(message => <Message messageContent={message.messageContent} key={message.id}/>)}
                <div className={classes.messageSend}>
                    <textarea value={newMessage} onChange={event => setNewMessage(event.target.value)} className={classes.messageInput} />
                    <Button onClick={newMessageSend} type="button" className={classes.messageBtn} disableRipple endIcon={<SendIcon/>}/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;