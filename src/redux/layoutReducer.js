let initialState = {
    toggleMenuOpen: true,
}
export const layoutReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        default:
            return {...state}
    }
}