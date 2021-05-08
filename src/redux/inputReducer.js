const initialState = {
    radioPriority:  "high",
}
export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_PRIORITY": {
            return {...state, radioPriority: action.selected}
        }
        default:
            return {...state}
    }
}

// {type:"SELECT_PRIORITY", selected:e.target.id}