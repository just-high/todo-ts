let initialState = {
    today: [
        {
            title: "ALPHA",
            body: "Кончился хлеб, нужен к вечеру",
            priority: "high",
            flag: "active",
            project: "Домашние дела",
            id: 1,
            category: "today"
        },
        {
            title: "Betta",
            body: "Кончился хлеб, нужен к вечеру",
            priority: "mid",
            flag: "active",
            project: "Домашние дела",
            id: 1,
            category: "today"
        },
    ]
}
export const todayReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "toggleMenuOpen":
            return {...state, toggleMenuOpen: !state.toggleMenuOpen}
        case "ADD_NEW_CARD":
            return {...state, today: [...state.today, action.newCard ]}
        default:
            return {...state}
    }
}

export const addNewCardAction= (newCard)=>{return{type: "ADD_NEW_CARD", newCard: newCard}}