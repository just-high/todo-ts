import {layoutReducer} from "./layoutReducer";
import {combineReducers} from "redux";
import {cardsReducer} from "./cardsReducer";
import {inputReducer} from "./inputReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {projectsReducer} from "./projectsReducer";
import {categoriesReducer} from "./categoriesReducer";
const {createStore} = require("redux");

let rootReducer = combineReducers({
    cards: cardsReducer,
    layout: layoutReducer,
    input: inputReducer,
    projects: projectsReducer,
    categories: categoriesReducer,
})

export const store = createStore(rootReducer,  composeWithDevTools())