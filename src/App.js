import React from 'react'

import "./App.css";
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes(true)
    return (
        <div>
            {routes}
        </div>
    );
}

export default App;