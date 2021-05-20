import {createSlice} from "@reduxjs/toolkit";

let randomColor = require('randomcolor');

export interface IProjectsItem {
    name: string
    color: string
}

const initialState: IProjectsItem[] = [
    {name: "Project1st", color: 'lightblue'},
    {name: "Project2st", color: 'lightpink'},
    {name: "Project3st", color: 'lightcoral'},
    {name: "Project4st", color: 'lightsalmon'},
]

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        CHANGE_COLOR_PROJECT: (state) => {
            let randomColors = () => {
                return randomColor({count: state.length, luminosity: 'dark', hue: 'random'})
            }
            for (let i = 0; i < state.length; i++) {
                state[i].color = randomColors()[i]
            }
        }
    }
})
export default projectsSlice.reducer
export const {CHANGE_COLOR_PROJECT}= projectsSlice.actions


//
// const initialState = {
// projectList: [
//     {name:"Project1st", color: 'randomColors'},
//     {name:"Project2st", color: 'randomColors'},
//     {name:"Project3st", color: 'randomColors'},
//     {name:"Project4st", color: 'randomColors'}
// ]
// }
// let randomColors = () => {
//     return randomColor({count: initialState.projectList.length, luminosity: 'dark', hue: 'random'})
// }
// for (let i=0; i <initialState.projectList.length; i++){
//   initialState.projectList[i].color=randomColors()[i]
// }
// console.log(randomColors())
// export const projectsReducer = (state=initialState, action)=>{
//     switch (action.type) {
//         case "": return {...state}
//         default: return  {...state}
//
//     }
// }