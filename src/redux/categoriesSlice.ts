import {colors} from "../GlobalStuff";
import {createSlice} from "@reduxjs/toolkit";

export interface ICategoryItem {
    name: string
    color: string
}
const initialState: ICategoryItem[] = [
        {name: "today", color: colors.tertiary},
        {name: "plan", color: colors.primary},
        {name: "done", color: colors.secondary},
        {name: "overdue", color: colors.grey1}
    ]

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        test: (state) => {
            return state
        }
    }
})
export const {test}=categoriesSlice.actions
export default categoriesSlice.reducer

// export const categoriesReducer = (state=initialState, action)=>{
//     switch (action.type) {
//         case "": return {...state}
//         default: return  {...state}
//
//     }
// }