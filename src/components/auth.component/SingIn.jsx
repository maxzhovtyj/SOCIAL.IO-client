import React, {useState} from 'react';

import classes from './auth.module.css'
import {Button, TextField} from "@mui/material";
import {useHttp} from '../../hooks/http.hooks'

const SingIn = () => {

    const {loading, request, error} = useHttp()

    const [form, setForm] = useState({email: '', password: ''})

    const singInHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
        } catch (e) {}
    }
    return (
        <div className={classes.singInWrapper}>
            <div className={classes.singIn}>
                <h1 className={classes.title}>Sing In</h1>
                <div className={classes.inputs}>
                    <TextField value={form.email} onChange={event => setForm({...form, email: event.target.value})}
                               size="normal" margin={"dense"} label="Email" fullWidth style={{marginBottom: '10px'}}/>
                    <TextField value={form.password}
                               onChange={event => setForm({...form, password: event.target.value})} size="normal"
                               margin={"dense"} label="Password" fullWidth/>
                </div>
                <Button onClick={singInHandler} disabled={loading} variant="contained" size="medium">Sing In</Button>
            </div>
        </div>
    );
};

export default SingIn;