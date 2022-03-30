import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    dialogs: dialogsPageReducer,
    profile: profilePageReducer
})

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk )))

export default store