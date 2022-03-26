import  React, {useContext, useState} from 'react';

import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import {NavLink} from "react-router-dom";

import {Button, TextField} from "@mui/material";
import classes from './auth.module.css'
import SimpleSnackbar from "../../UI/Snackbar";


const SingIn = () => {
    const auth = useContext(AuthContext)

    const [openSnackBar, setOpenSnackBar] = useState(false)

    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({username: '', password: ''})
    const loginHandler = async () => {
        try {
            let userData = {username: form.username, password: form.password}
            const data = await request('/auth/login', 'POST', userData)
            auth.login(data.token, data.id)
        } catch (e) {
            setOpenSnackBar(true)
            console.log(e)
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
                <Button onClick={loginHandler} disabled={loading} variant="contained" size="medium">Sing In</Button>
                <SimpleSnackbar open={openSnackBar} setOpen={setOpenSnackBar} errorMessage={error}/>
            </div>
        </div>
    );
};

export default SingIn;