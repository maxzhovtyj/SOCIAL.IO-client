import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";

const rootReducer = combineReducers({dialogsPageReducer, profilePageReducer})

let store = createStore(rootReducer)

export default store