import {applyMiddleware, combineReducers, createStore} from "redux";

import {dialogsPageReducer} from "./DialogsPageRedux/dialogsPageReducer";
import {profilePageReducer} from "./ProfilePageRedux/profilePageReducer";
import {newsPageReducer} from "./NewsPageRedux/newsPageReducer";
import {friendsPageReducer} from "./FriendsPageRedux/friendsPageReducer";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    dialogs: dialogsPageReducer,
    profile: profilePageReducer,
    news: newsPageReducer,
    friends: friendsPageReducer
})

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store