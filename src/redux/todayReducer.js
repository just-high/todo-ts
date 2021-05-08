let initialState = [
    {title: "first", body: "Сделать тудулист", priority: 4, flag: "active", project: "dwdaw", id:1, category: "today"},
]
export const todayReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        default:
            return {...state}
    }
}