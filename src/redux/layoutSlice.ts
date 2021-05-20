import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {colors} from "../GlobalStuff";

interface ILayoutState {
    toggleMenuOpen: boolean
    activeFilter: string
    activeColorMainCard: string
    priorityList: string[]
    editorData: {  editorIsOpen:boolean
    cardId: number}
}

const initialState: ILayoutState = {
    toggleMenuOpen: true,
    activeFilter: "today",
    activeColorMainCard: colors.tertiary,
    priorityList: ['low','mid','high'],
    editorData: {
        editorIsOpen: false,
        cardId: 0
    }
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        TOGGLE_EDITOR: (state)=>{
            state.editorData.editorIsOpen= !state.editorData.editorIsOpen
        },
        TOGGLE_MENU_OPEN: (state) => {
            state.toggleMenuOpen = !state.toggleMenuOpen
        },
        CHANGE_ACTIVE_COLOR: (state, action: PayloadAction<string>) => {
            state.activeColorMainCard = action.payload
        },
        CHANGE_ACTIVE_FILTER: (state, action: PayloadAction<string>) => {
            state.activeFilter = action.payload
        },
    }
})
export default layoutSlice.reducer
export const {TOGGLE_MENU_OPEN,CHANGE_ACTIVE_COLOR ,CHANGE_ACTIVE_FILTER, TOGGLE_EDITOR} = layoutSlice.actions

// let initialState = {
//     toggleMenuOpen: true,
//     sizeGrid: 1,
//     activeFilter: "today",
//     activeColorMainCard: "red",
// }
// export const layoutReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "toggleMenuOpen":
//             return {...state, toggleMenuOpen: !state.toggleMenuOpen}
//         case "CHANGE_ACTIVE_FILTER_AND_COLOR":
//             return {...state, activeFilter: action.activeFilter, activeColorMainCard: action.color}
//         default:
//             return {...state}
//     }
// }
//
//
// export const changeActiveFilterAndColorAction = (activeFilter, color) => {
//     return {type: "CHANGE_ACTIVE_FILTER_AND_COLOR", activeFilter: activeFilter, color: color}
// }
// export const toggleMenuAction = () => {
//     return {type: "toggleMenuOpen"}
// }