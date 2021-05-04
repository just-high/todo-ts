import {layoutReducer} from "./layoutReducer";
import {combineReducers} from "redux";
import {todayReducer} from "./todayReducer";
const {createStore} = require("redux");
let rootReducer = combineReducers({
    today: todayReducer,
    layout: layoutReducer,
})

export const store = createStore(rootReducer)