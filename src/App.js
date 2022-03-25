import React from 'react'

import {AuthContext} from "./context/AuthContext";

import "./App.css";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <div>
                {routes}
            </div>
        </AuthContext.Provider>
    );
}

export default App;