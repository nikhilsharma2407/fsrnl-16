import { combineReducers } from "redux";
import countReducer from "./CountReducer";
import userReducer from "./userReducer";

export default combineReducers({
    user:userReducer,
    count:countReducer
})