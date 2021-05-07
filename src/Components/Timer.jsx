import {H3} from "../ComponentsLib/Typography";
import {Flex} from "../ComponentsLib/Flex";

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
if (day < 10) {
    day = `0${day}`;
}
if (month < 10) {
    month = `0${month}`;
}

let hours = now.getHours();
let minutes = now.getMinutes();
let secinds = now.getSeconds();
let milliseconds = now.getMilliseconds();
let todayIs = `${day}.${month}.${year}`;
let nowIs = `${hours}:${minutes}`
console.log(hours, minutes, secinds, milliseconds);
export  const Timer = (props)=>{
    return(
        <Flex flexDirection='column'><div><H3>{todayIs}</H3></div> <div><H3>{nowIs}</H3></div></Flex>
    )
}