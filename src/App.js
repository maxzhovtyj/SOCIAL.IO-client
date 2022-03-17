import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import "./App.css";

import Header from "./components/header.component/Header";
import Sidebar from "./components/sidebar.component/Sidebar";
import News from "./components/main.component/News/News";
import Dialogs from "./components/main.component/Dialogs/Dialogs";
import Settings from "./components/main.component/Settings/Settings";
import Profile from "./components/main.component/Profile/Profile";
import Friends from "./components/main.component/Friends/Friends";

function App({state}) {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path='/' element={<News/>} />
                    <Route path='/dialogs/*' element={<Dialogs state={state.dialogsPage}/>} />
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/profile' element={<Profile state={state.profilePage} addNewPost={state.addNewPost}/>} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;