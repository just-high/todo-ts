import {colors} from "../GlobalStuff";

const initialState = {
categoriesList: [
    {name: "today", color: colors.tertiary},
    {name: "plan", color: colors.primary},
    {name: "done", color: colors.secondary},
    {name: "overdue", color: colors.grey1}
]
}

export const categoriesReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "": return {...state}
        default: return  {...state}

    }
}