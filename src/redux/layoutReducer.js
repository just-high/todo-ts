let initialState = {
    toggleMenuOpen: true,
    sizeGrid: 1,
    activeFilter: "today",
    activeColorMainCard: "red",
}
export const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        case "CHANGE_ACTIVE_FILTER_AND_COLOR":
            return {...state, activeFilter: action.activeFilter, activeColorMainCard: action.color}
        default:
            return {...state}
    }
}


export const changeActiveFilterAndColorAction = (activeFilter, color) => {
    return {type: "CHANGE_ACTIVE_FILTER_AND_COLOR", activeFilter: activeFilter, color: color}
}
export const toggleMenuAction = () => {
    return {type: "toggleMenuOpen"}
}