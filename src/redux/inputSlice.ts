import {ICardData} from "./Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ICardData = {
    title: "",
    body: "",
    priority: "high",
    flag: true,
    project: "Choose a project",
    id: Date.now(),
    category: "today",
}

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        SELECT_PRIORITY: (state, action: PayloadAction<string>) => {
            state.priority = action.payload
        },
        TYPING_TASK: (state, action: PayloadAction<string>) => {
            state.body = action.payload
        },
        TITLE_CREATOR: (state, action: PayloadAction<string>) => {
            let title = action.payload.split(' ').slice(0, 2).join(' ')
            title = title[0].toUpperCase() + title.slice(1);
            state.title = title
        },
        INPUT_PROJECT_CHANGE: (state, action: PayloadAction<string>) => {
            state.project = action.payload
        }
    }
})

export default inputSlice.reducer
export const {SELECT_PRIORITY, TYPING_TASK, TITLE_CREATOR, INPUT_PROJECT_CHANGE,} = inputSlice.actions


// export const inputSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case "SELECT_PRIORITY": {
//             return {...state, newCard: {...state.newCard, priority: action.priority},}
//         }
//         case "TYPING_TASK": {
//             return {...state, newCard: {...state.newCard, body: action.text}}
//         }
//         case "TOGGLE_PRIORITY": {
//             return {...state, newCard: {...state.newCard, priority: action.select}}
//             // return {...state, radioPriority: {...state.radioPriority, selected: action.select}}
//         }
//         case "TOGGLE_PROJECT": {
//             return {...state, newCard: {...state.newCard, project: action.project}}
//             // return {...state, selectedProject: action.project}
//         }
//         case "TITLE_CREATOR": {
//             if(state.newCard.body == '') {
//                 return {...state, newCard: {...state.newCard, title: ''}}
//             } else {
//                 let rawTitle = state.newCard.body
//                 rawTitle = rawTitle.split(' ').slice(0, 2).join(' ')
//                 let title = rawTitle[0].toUpperCase() + rawTitle.slice(1)
//                 return {...state, newCard: {...state.newCard, title: title}}
//             }
//         }
//         default:
//             return {...state}
//     }
// }
//
//
// export const titleCreatorAction = () => {
//     return {type: "TITLE_CREATOR"}
// }
// export const setSelectedProjectAction = (selectedProject) => {
//     return {type: "TOGGLE_PROJECT", project: selectedProject}
// }
// export const togglePriorityAction = (select) => {
//     return {type: "TOGGLE_PRIORITY", select: select}
// }
// export const typingTaskAction = (text) => {
//     return {type: "TYPING_TASK", text: text}
// }
// {type:"SELECT_PRIORITY", selected:e.target.id}