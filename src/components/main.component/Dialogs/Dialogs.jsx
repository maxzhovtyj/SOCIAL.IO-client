import React, {useState} from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import classes from './Dialogs.module.css'
import {useDispatch, useSelector} from "react-redux";

const Dialogs = () => {
    const dispatch = useDispatch()
    const dialogsList = useSelector(state => state.dialogsPageReducer.dialogsList)
    const dialogContent = useSelector(state => state.dialogsPageReducer.dialogContent)

    const [newMessage, setNewMessage] = useState()
    const onSetNewMessage = (event) => {
        setNewMessage(event.target.value)
    }

    function newMessageSend() {
        try {
            let newDialogMessage = {id: Date.now(), messageContent: newMessage}
            if (!newMessage.trim()) {
                throw "Empty message"
            }
            dispatch({type: 'ADD_MESSAGE', newDialogMessage})
        } catch (error) {
            console.error(error)
        } finally {
            setNewMessage('')
        }
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogsList}>
                {dialogsList.map(user => <DialogItem userName={user.name} id={user.id} key={user.id}/>)}
            </div>
            <div className={classes.chatContent}>
                <div className={classes.messagesWrapper}>
                    <div className={classes.messages}>
                        {dialogContent.map(message => <Message messageContent={message.messageContent}
                                                               key={message.id}/>)}
                    </div>
                </div>
                <div className={classes.messageSend}>
                    <textarea value={newMessage} onChange={onSetNewMessage} className={classes.messageInput}/>
                    <Button onClick={newMessageSend} type="button" className={classes.messageBtn} disableRipple
                            endIcon={<SendIcon/>}/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;