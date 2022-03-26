import React, {useState} from 'react';
import classes from "./auth.module.css";
import {Button, IconButton, Snackbar, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import CloseIcon from '@mui/icons-material/Close';


const SingUp = () => {
    const {loading, error, request, clearError} = useHttp()
    const [singUpForm, setSingUpForm] = useState({username: '', password: '', validPassword: ''})

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    const registrationHandler = async () => {
        try {
            if (singUpForm.password !== singUpForm.validPassword) {
                throw new Error("Password do not match try again")
            }
            let userData = {username: singUpForm.username, password: singUpForm.password}
            const response = await request('/auth/registration', 'POST', userData)
            console.log(response)
        } catch (e) {
            handleClick()
        }
    }
    return (
        <div className={classes.singWrapper}>
            <div className={classes.sing}>
                <h1 className={classes.title}>Sing Up</h1>
                <div className={classes.inputs}>
                    <TextField value={singUpForm.username}
                               onChange={event => setSingUpForm({...singUpForm, username: event.target.value})}
                               size="normal" margin={"dense"} label="Email" fullWidth style={{marginBottom: '10px'}}/>
                    <TextField value={singUpForm.password}
                               onChange={event => setSingUpForm({...singUpForm, password: event.target.value})}
                               size="normal"
                               margin={"dense"} label="Password" fullWidth/>
                    <TextField value={singUpForm.validPassword}
                               onChange={event => setSingUpForm({...singUpForm, validPassword: event.target.value})}
                               size="normal"
                               margin={"dense"} label="Repeat password" fullWidth/>
                    <span className={classes.goTo}>Already have account? <NavLink to="/">Sing In</NavLink></span>
                </div>
                <Button onClick={registrationHandler} disabled={loading} variant="contained" size="medium">Sing In</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={error}
                    action={action}
                />
            </div>
        </div>
    );
};

export default SingUp;