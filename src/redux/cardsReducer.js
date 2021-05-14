let initialState = {
    cardsData: [
        {
            title: "today",
            body: "Project1st ",
            priority: "high",
            flag: "active",
            project: "Project1st",
            id: 1,
            category: "today",
            editorStateVisible: false,
        },
        {
            title: "today",
            body: "Project2st",
            priority: "mid",
            flag: "active",
            project: "Project2st",
            id: 2,
            category: "today",
            editorStateVisible: false,
        },
        {
            title: "today",
            body: "Project3st",
            priority: "mid",
            flag: "active",
            project: "Project3st",
            id: 3,
            category: "today",
            editorStateVisible: false,
        },
        {
            title: "today",
            body: "Project4st",
            priority: "mid",
            flag: "active",
            project: "Project4st",
            id: 4,
            category: "today",
            editorStateVisible: false,
        },
        {
            title: "plan",
            body: "Project1st ",
            priority: "high",
            flag: "active",
            project: "Project1st",
            id: 5,
            category: "plan",
            editorStateVisible: false,
        },
        {
            title: "plan",
            body: "Project2st",
            priority: "mid",
            flag: "active",
            project: "Project2st",
            id: 6,
            category: "plan",
            editorStateVisible: false,
        },
        {
            title: "plan",
            body: "Project3st",
            priority: "mid",
            flag: "active",
            project: "Project3st",
            id: 7,
            category: "plan",
            editorStateVisible: false,
        },
        {
            title: "plan",
            body: "Project4st",
            priority: "mid",
            flag: "active",
            project: "Project4st",
            id: 8,
            category: "plan",
            editorStateVisible: false,
        },
    ]
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        case "ADD_NEW_CARD":
            return {...state, cardsData: [...state.cardsData, action.newCard]}
        case "OPEN_EDITOR": {
            let changedCards = state.cardsData.map((el) => {
                if (el.id === action.id) {
                    el.editorStateVisible = true
                    return el
                } else {
                    return el
                }
            })
            return {...state, cardsData: changedCards}
        }
        case "CLOSE_EDITOR": {
            let changedCards = state.cardsData.map((el) => {
                el.editorStateVisible = false
                return el
            })
            return {...state, cardsData: changedCards}
        }
        case "SAVE_CHANGES": {
            let changedCards = state.cardsData.map((el) => {
                if (el.id === action.id) {
                   el = action.editingCard
                    return el
                } else {
                    return el
                }
            })
            return {...state, cardsData: changedCards}
        }
        default:
            return {...state}
    }
}


export const saveChangesAction = (id, editingCard) => {
    return {type: "SAVE_CHANGES", id: id, editingCard: editingCard}
}
export const addNewCardAction = (newCard) => {
    return {type: "ADD_NEW_CARD", newCard: newCard}
}
export const openEditorAction = (id) => {
    return {type: "OPEN_EDITOR", id: id}
}