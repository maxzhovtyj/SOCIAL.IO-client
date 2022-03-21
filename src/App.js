import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import "./App.css";

import Header from "./components/header.component/Header";
import Sidebar from "./components/sidebar.component/Sidebar";
import News from "./components/main.component/News/News";
import Dialogs from "./components/main.component/Dialogs/Dialogs";
import Settings from "./components/main.component/Settings/Settings";
import Profile from "./components/main.component/Profile/Profile";
import Friends from "./components/main.component/Friends/Friends";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
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
            </Router>
        </Provider>
    );
}

export default App;