import React, {useState} from 'react';

import {NavLink, useNavigate} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";

import classes from "./auth.module.css";
import {Button, TextField} from "@mui/material";
import SimpleSnackbar from "../../UI/Snackbar";


const SingUp = () => {
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const navigate = useNavigate()

    const {loading, error, request, clearError} = useHttp()

    const [singUpForm, setSingUpForm] = useState({username: '', password: '', validPassword: ''})
    const registrationHandler = async () => {
        try {
            if (singUpForm.password !== singUpForm.validPassword) {
                throw new Error("Password do not match try again")
            }
            let userData = {username: singUpForm.username, password: singUpForm.password}
            const response = await request('/auth/registration', 'POST', userData)
            navigate("/")
            console.log(response)
        } catch (e) {
            setOpenSnackBar(true)
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
                               type={"password"}
                               size="normal"
                               margin={"dense"} label="Password" fullWidth/>
                    <TextField value={singUpForm.validPassword}
                               type={"password"}
                               onChange={event => setSingUpForm({...singUpForm, validPassword: event.target.value})}
                               size="normal"
                               margin={"dense"} label="Repeat password" fullWidth/>
                    <span className={classes.goTo}>Already have account? <NavLink to="/">Sing In</NavLink></span>
                </div>
                <Button onClick={registrationHandler} disabled={loading} variant="contained" size="medium">Sing In</Button>
                <SimpleSnackbar open={openSnackBar} setOpen={setOpenSnackBar} errorMessage={error}/>
            </div>
        </div>
    );
};

export default SingUp;