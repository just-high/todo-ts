let initialState = {
    cardsData: [
        {
            title: "today",
            body: "Project1st ",
            priority: "high",
            flag: "active",
            project: "Project1st",
            id: 1,
            category: "today"
        },
        {
            title: "today",
            body: "Project2st",
            priority: "mid",
            flag: "active",
            project: "Project2st",
            id: 2,
            category: "today"
        },
        {
            title: "today",
            body: "Project3st",
            priority: "mid",
            flag: "active",
            project: "Project3st",
            id: 2,
            category: "today"
        },
        {
            title: "today",
            body: "Project4st",
            priority: "mid",
            flag: "active",
            project: "Project4st",
            id: 2,
            category: "today"
        },
        {
            title: "plan",
            body: "Project1st ",
            priority: "high",
            flag: "active",
            project: "Project1st",
            id: 1,
            category: "plan"
        },
        {
            title: "plan",
            body: "Project2st",
            priority: "mid",
            flag: "active",
            project: "Project2st",
            id: 2,
            category: "plan"
        },
        {
            title: "plan",
            body: "Project3st",
            priority: "mid",
            flag: "active",
            project: "Project3st",
            id: 2,
            category: "plan"
        },
        {
            title: "plan",
            body: "Project4st",
            priority: "mid",
            flag: "active",
            project: "Project4st",
            id: 2,
            category: "plan"
        },
    ]
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        case "ADD_NEW_CARD":
            return {...state, cardsData: [...state.cardsData, action.newCard]}
        default:
            return {...state}
    }
}

export const addNewCardAction = (newCard) => {
    return {type: "ADD_NEW_CARD", newCard: newCard}
}