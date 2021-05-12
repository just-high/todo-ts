const initialState = {
projectList: [
    "Project1st",
    "Project2st",
    "Project3st",
    "Project4st"
]
}

export const projectReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "": return {...state}
        default: return  {...state}

    }
}