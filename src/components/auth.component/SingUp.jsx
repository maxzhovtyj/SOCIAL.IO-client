// todo sing up component

import React, {useEffect, useState} from 'react';
import classes from "./auth.module.css";
import {Button, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import api from '../../api/auth'


const SingUp = () => {
    const [singUpForm, setSingUpForm] = useState({username: '', password: '', validPassword: ''})
    const fetchRegistration = async () => {
        try {
            if (singUpForm.password !== singUpForm.validPassword) {
                throw new Error('Passwords do not match, try again')
            }
            let userData = {
                username: singUpForm.username,
                password: singUpForm.password
            }
            const response = await api.post('/auth/registration', userData)
            console.log(response.data)
        } catch (e) {
            if (e.res) {
                console.log(e.response.data)
                console.log(e.response.status)
                console.log(e.response.headers)
            } else {
                console.log(e.message)
            }
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
                <Button onClick={fetchRegistration} variant="contained" size="medium">Sing In</Button>
            </div>
        </div>
    );
};

export default SingUp;