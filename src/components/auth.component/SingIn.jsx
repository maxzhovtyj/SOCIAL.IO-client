// todo sing in component

import React, {useState} from 'react';

import classes from './auth.module.css'
import {Button, TextField} from "@mui/material";
import {NavLink, Redirect} from "react-router-dom";
import api from "../../api/auth";

const SingIn = () => {
    const [form, setForm] = useState({username: '', password: ''})
    const fetchLogin = async () => {
        try {
            let userData = {
                username: form.username,
                password: form.password
            }
            const response = await api.post('/auth/login', userData)
            console.log(response.data)
            const token = response.data.token
            localStorage.setItem('token', token)
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
                <h1 className={classes.title}>Sing In</h1>
                <div className={classes.inputs}>
                    <TextField value={form.username} onChange={event => setForm({...form, username: event.target.value})}
                               size="normal" margin={"dense"} label="Email" fullWidth style={{marginBottom: '10px'}}/>
                    <TextField value={form.password}
                               onChange={event => setForm({...form, password: event.target.value})} size="normal"
                               margin={"dense"} label="Password" fullWidth/>
                    <span className={classes.goTo}>Don't have an account yet? <NavLink to="/singUp">Sing Up</NavLink></span>
                </div>
                <Button onClick={fetchLogin} variant="contained" size="medium">Sing In</Button>
            </div>
        </div>
    );
};

export default SingIn;