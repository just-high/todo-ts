const initialState = {
    newCard: {
        title: "",
        body: "",
        priority: "high",
        flag: "active",
        project: "Choose a project",
        id: Date.now(),
        category: "today",
        editorStateVisible: false,
    },
    radioPriority: {
        list: ["high", "mid", "low",],
    },

}
export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_PRIORITY": {
            return {...state, newCard: {...state.newCard, priority: action.priority},}
        }
        case "TYPING_TASK": {
            return {...state, newCard: {...state.newCard, body: action.text}}
        }
        case "TOGGLE_PRIORITY": {
            return {...state, newCard: {...state.newCard, priority: action.select}}
            // return {...state, radioPriority: {...state.radioPriority, selected: action.select}}
        }
        case "TOGGLE_PROJECT": {
            return {...state, newCard: {...state.newCard, project: action.project}}
            // return {...state, selectedProject: action.project}
        }
        case "TITLE_CREATOR": {
            if(state.newCard.body == '') {
                return {...state, newCard: {...state.newCard, title: ''}}
            } else {
                let rawTitle = state.newCard.body
                rawTitle = rawTitle.split(' ').slice(0, 2).join(' ')
                let title = rawTitle[0].toUpperCase() + rawTitle.slice(1)
                return {...state, newCard: {...state.newCard, title: title}}
            }
        }
        default:
            return {...state}
    }
}


export const titleCreatorAction = () => {
    return {type: "TITLE_CREATOR"}
}
export const setSelectedProjectAction = (selectedProject) => {
    return {type: "TOGGLE_PROJECT", project: selectedProject}
}
export const togglePriorityAction = (select) => {
    return {type: "TOGGLE_PRIORITY", select: select}
}
export const typingTaskAction = (text) => {
    return {type: "TYPING_TASK", text: text}
}
// {type:"SELECT_PRIORITY", selected:e.target.id}