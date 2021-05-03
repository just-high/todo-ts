import {layoutReducer} from "./layoutReducer";

const {createStore} = require("redux");


export const store = createStore(layoutReducer)