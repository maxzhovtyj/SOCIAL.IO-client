import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import News from "./components/main/News/News";
import Dialogs from "./components/main/Dialogs/Dialogs";
import Friends from "./components/main/Friends/Friends";
import Settings from "./components/main/Settings/Settings";
import SingIn from "./components/auth/SingIn";
import SingUp from "./components/auth/SingUp";
import ProfileContainer from "./components/main/Profile/ProfileContainer";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <div className="App">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path='/' element={<News/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/friends/*' element={<Friends/>}/>
                    <Route path='/profile/:id' element={<ProfileContainer/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        );
    }
    else {
        return (
            <Routes>
                <Route path="/" element={<SingIn/>}/>
                <Route path="/singUp" element={<SingUp/>}/>
            </Routes>
        )
    }
};