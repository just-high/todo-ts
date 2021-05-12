let initialState = {
    toggleMenuOpen: true,
    sizeGrid: 1
}
export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        default:
            return {...state}
    }
}

export const toggleMenuAction = () => {    return {type: "toggleMenuOpen"}}