import React, {useState} from 'react';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import classes from './Dialogs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {sendMessageActionCreator} from "../../../redux/dialogsPageReducer";

const Dialogs = () => {
    const dispatch = useDispatch()
    const dialogsList = useSelector(state => state.dialogs.dialogsList)
    const dialogContent = useSelector(state => state.dialogs.dialogContent)

    const [newMessage, setNewMessage] = useState()
    const onSetNewMessage = (event) => {
        setNewMessage(event.target.value)
    }

    function newMessageSend() {
        try {
            let newDialogMessage = {id: Date.now(), messageContent: newMessage}
            if (!newMessage?.trim()) {
                throw new Error("Empty message")
            }
            let sendMessageAction = sendMessageActionCreator(newDialogMessage)
            dispatch(sendMessageAction)
        } catch (error) {
            console.error(error)
        } finally {
            setNewMessage('')
        }
    }

    return (
        <section className={classes.dialogs}>
            <TextField className={classes.dialogsListSearch} size={"small"} label="Search" variant={"filled"}/>

            <ul className={classes.dialogsList}>
                {dialogsList.map(user => <DialogItem userName={user.name} id={user.id} key={user.id}/>)}
            </ul>

            <div className={classes.messages}>
                {dialogContent.map(message => <Message messageContent={message.messageContent}
                                                       key={message.id}/>)}
            </div>

            <div className={classes.messageSendArea}>
                <textarea value={newMessage} onChange={onSetNewMessage} className={classes.messageInput}/>
                <Button onClick={newMessageSend} type="button" className={classes.messageBtn} disableRipple
                        endIcon={<SendIcon/>}/>
            </div>

        </section>
    )
};

export default Dialogs;