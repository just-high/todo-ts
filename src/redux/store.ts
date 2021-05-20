import {configureStore} from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import cardsReducer from "./cardsSlice";
import editorReducer from "./editorSlice";
import inputReducer from "./inputSlice"
import layoutReducer from "./layoutSlice";
import projectsReducer from "./projectsSlice"

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        input: inputReducer,
        cards: cardsReducer,
        editor: editorReducer,
        layout: layoutReducer,
        projects: projectsReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// let rootReducer = combineReducers({
//     cards: cardsReducer,
//     layout: layoutReducer,
//     input: inputReducer,
//     projects: projectsReducer,
//     categories: categoriesReducer,
//     editor: editorReducer,
// })
//
// export const store = createStore(rootReducer,  composeWithDevTools())