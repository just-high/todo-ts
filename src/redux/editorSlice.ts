import {ICardData} from "./Interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ICardData = {
    title: "",
    body: "",
    priority: "",
    flag: true,
    project: "",
    id: 1,
    category: "",
}
export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        COPY_EDIT_CARD: (state, action: PayloadAction<ICardData>) => {
            state.title = action.payload.title
            state.body = action.payload.body
            state.priority = action.payload.priority
            state.flag = action.payload.flag
            state.project = action.payload.project
            state.id = action.payload.id
            state.category = action.payload.category
            console.log(state)
        },
        TITLE_CHANGE: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        BODY_CHANGE: (state, action: PayloadAction<string>) => {
            state.body = action.payload
        },
        PRIORITY_CHANGE: (state, action: PayloadAction<string>) => {
            state.priority = action.payload
        },
        PROJECT_CHANGE: (state, action: PayloadAction<string>) => {
            state.project = action.payload
        }
    }
})
export default editorSlice.reducer
export const {COPY_EDIT_CARD, TITLE_CHANGE, BODY_CHANGE, PRIORITY_CHANGE, PROJECT_CHANGE} = editorSlice.actions

// export const editorReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "COPY_EDIT_CARD": {
//             return {...state, editedCard: {...action.cardData}}
//         }
//         case "TITLE_CHANGE": {
//             return {...state, editedCard: {...state.editedCard, title: action.title}}
//         }
//         case "BODY_CHANGE": {
//             return {...state, editedCard: {...state.editedCard, body: action.body}}
//         }
//         case "PRIORITY_CHANGE": {
//             return {...state, editedCard: {...state.editedCard, priority: action.priority}}
//         }
//         case "PROJECT_CHANGE": {
//             return {...state, editedCard: {...state.editedCard, project: action.project}}
//         }
//         default:
//             return {...state}
//     }
// }
//
//
// export const copyEditCardAction = (cardData) => {
//     return {type: "COPY_EDIT_CARD", cardData: cardData}
// }
// export const bodyChangeAction = (body) => {
//     return {type: "BODY_CHANGE", body: body}
// }
// export const titleChangeAction = (title) => {
//     return {type: "TITLE_CHANGE", title: title}
// }
// export const priorityChangeAction = (priority) => {
//     return {type: "PRIORITY_CHANGE", priority: priority}
// }
// export const projectChangeAction = (project) => {
//     return {type: "PROJECT_CHANGE", project: project}
// }
//
// export const closeEditorAction = () => {
//     return {type: "CLOSE_EDITOR"}
// }