import { combineReducers } from "@reduxjs/toolkit";
import alert from "./alert";
import helmet from "./helmet";
import theme from "./theme";


const createReducer = combineReducers({
    alert,
    helmet,
    theme
});

export default createReducer