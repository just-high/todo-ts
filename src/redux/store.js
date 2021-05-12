import {layoutReducer} from "./layoutReducer";
import {combineReducers} from "redux";
import {todayReducer} from "./todayReducer";
import {inputReducer} from "./inputReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {projectReducer} from "./projectReducer";
const {createStore} = require("redux");

let rootReducer = combineReducers({
    today: todayReducer,
    layout: layoutReducer,
    input: inputReducer,
    project: projectReducer,
})

export const store = createStore(rootReducer,  composeWithDevTools())