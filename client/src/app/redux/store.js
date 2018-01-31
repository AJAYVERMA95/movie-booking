import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import user from "./reducers/userReducer.js";

export default createStore(
    combineReducers({ user }),
    composeWithDevTools(applyMiddleware(thunk))
);