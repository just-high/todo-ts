const initialState = {
    radioPriority: "high",
    newCard: {
        title: "ALPHA",
        body: "",
        priority: 1,
        flag: "active",
        project: "Домашние дела",
        id: 1,
        category: "today"
    }
}
export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_PRIORITY": {
            return {...state, newCard: {...state.newCard, priority: action.priority}, }
        }
        case "TYPING_TASK": {
            return {...state, newCard: {...state.newCard, body: action.text}, }
        }
        default:
            return {...state}
    }
}

// {type:"SELECT_PRIORITY", selected:e.target.id}