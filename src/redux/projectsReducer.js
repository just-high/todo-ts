let randomColor = require('randomcolor');


const initialState = {
projectList: [
    {name:"Project1st", color: 'randomColors'},
    {name:"Project2st", color: 'randomColors'},
    {name:"Project3st", color: 'randomColors'},
    {name:"Project4st", color: 'randomColors'}
]
}
let randomColors = () => {
    return randomColor({count: initialState.projectList.length, luminosity: 'dark', hue: 'random'})
}
for (let i=0; i <initialState.projectList.length; i++){
  initialState.projectList[i].color=randomColors()[i]
}
console.log(randomColors())
export const projectsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "": return {...state}
        default: return  {...state}

    }
}