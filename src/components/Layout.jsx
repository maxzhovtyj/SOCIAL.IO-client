import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
    return (
        <div className="App">
            <Header/>
            <div className="wrapper"><Outlet/></div>
            <Sidebar/>
        </div>
    );
};

export default Layout;