let initialState = [
    {title: "first", body: "Сделать тудулист", priority: 4, flag: "active",}
]
export const todayReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        default:
            return {...state}
    }
}