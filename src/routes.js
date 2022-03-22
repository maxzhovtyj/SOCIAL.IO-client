import React from 'react';
import App from "./App";
import Header from "./components/header.component/Header";
import Sidebar from "./components/sidebar.component/Sidebar";
import {Route, Routes} from "react-router-dom";
import News from "./components/main.component/News/News";
import Dialogs from "./components/main.component/Dialogs/Dialogs";
import Friends from "./components/main.component/Friends/Friends";
import Profile from "./components/main.component/Profile/Profile";
import Settings from "./components/main.component/Settings/Settings";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <div className="App">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path='/' element={<News/>}/>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        );
    }
    else {
        return (
            <h1>Hello World</h1>
        )
    }
};