import {layoutReducer} from "./layoutReducer";
import {combineReducers} from "redux";
import {todayReducer} from "./todayReducer";
import {inputReducer} from "./inputReducer";
import {composeWithDevTools} from "redux-devtools-extension";
const {createStore} = require("redux");

let rootReducer = combineReducers({
    today: todayReducer,
    layout: layoutReducer,
    input: inputReducer,
})

export const store = createStore(rootReducer,  composeWithDevTools())