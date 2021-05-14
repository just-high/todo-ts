const initialState = {
    editedCard: {
        title: "today",
        body: "Project1st ",
        priority: "high",
        flag: "active",
        project: "Project1st",
        id: 1,
        category: "today",
        editorStateVisible: false,
    }
}
export const editorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COPY_EDIT_CARD": {
            return {...state, editedCard: {...action.cardData}}
        }
        case "TITLE_CHANGE": {
            return {...state, editedCard: {...state.editedCard, title: action.title}}
        }
        case "BODY_CHANGE": {
            return {...state, editedCard: {...state.editedCard, body: action.body}}
        }
        case "PRIORITY_CHANGE": {
            return {...state, editedCard: {...state.editedCard, priority: action.priority}}
        }
        case "PROJECT_CHANGE": {
            return {...state, editedCard: {...state.editedCard, project: action.project}}
        }
        default:
            return {...state}
    }
}


export const copyEditCardAction = (cardData) => {
    return {type: "COPY_EDIT_CARD", cardData: cardData}
}
export const bodyChangeAction = (body) => {
    return {type: "BODY_CHANGE", body: body}
}
export const titleChangeAction = (title) => {
    return {type: "TITLE_CHANGE", title: title}
}
export const priorityChangeAction = (priority) => {
    return {type: "PRIORITY_CHANGE", priority: priority}
}
export const projectChangeAction = (project) => {
    return {type: "PROJECT_CHANGE", project: project}
}

export const closeEditorAction = () => {
    return {type: "CLOSE_EDITOR"}
}