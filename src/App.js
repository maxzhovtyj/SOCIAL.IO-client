import React, {useState} from 'react'

import "./App.css";
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes(false)
    return (
        <div>
            {routes}
        </div>
    );
}

export default App;