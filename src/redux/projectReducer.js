const initialState = {
project: [
    {name: "project1", list:[1,5,3]}
]
}

export const projectReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "": return {...state}
        default: return  {...state}

    }
}