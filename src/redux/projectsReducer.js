let randomColor = require('randomcolor');
let randomColors = () => {
    return randomColor({luminosity: 'dark', hue: 'random'})
}

const initialState = {
projectList: [
    {name:"Project1st", color: randomColors},
    {name:"Project2st", color: randomColors},
    {name:"Project3st", color: randomColors},
    {name:"Project4st", color: randomColors}
]
}

export const projectsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "": return {...state}
        default: return  {...state}

    }
}