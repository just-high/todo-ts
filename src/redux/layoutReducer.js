let initialState = {
    toggleMenuOpen: true,
    sizeGrid: 1,
    activeFilter: "today",
}
export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        case "CHANGE_ACTIVE_FILTER":
            return {...state, activeFilter: action.activeFilter}
        default:
            return {...state}
    }
}


export const changeActiveFilterAction = (activeFilter) => {
    return {type: "CHANGE_ACTIVE_FILTER", activeFilter: activeFilter}
}
export const toggleMenuAction = () => {
    return {type: "toggleMenuOpen"}
}