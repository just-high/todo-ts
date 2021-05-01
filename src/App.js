import ListIcon from '@material-ui/icons/List';
import {GridFullWidthSection, Grid, GridCell, GridContent, GridCore} from "./ComponentsLib/Grid";
import {breakpointsMaxWidth} from "./ComponentsLib/breakpoints";
import styled from "styled-components";
   let {tablet,mobileL,mobileS}=breakpointsMaxWidth

const Header = () => {
    return (
        <div className="header">
            <ListIcon/>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
        </div>
    )
}
const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>Today</li>
                <li>WillBe</li>
                <li>Overdue</li>
                <li>Done</li>
            </ul>
        </div>
    )
}
function App() {
    console.log(tablet,mobileL,mobileS)
    return (<>
        <GridCore color="lightcoral" className="Grid">
            <GridFullWidthSection className='section'><GridContent className='content'>
                <GridCell className='cell' colordef="green" >heeee</GridCell>
                <GridCell colorDef='red' colorTab='blue'>heeee</GridCell>
                <GridCell colorDef='yellow' colorTab='lightblue' >heeee</GridCell>
                <GridCell colorDef='lightcoral' colorTab='green'>heeee</GridCell>
                <GridCell colorDef='pink' colorTab='red'>heeee</GridCell>
                <GridCell colorDef='red' colorTab='blue'>heeee</GridCell>
                <GridCell colorDef='yellow' colorTab='lightblue'>heeee</GridCell>
                <GridCell colorDef='lightcoral' colorTab='green'>heeee</GridCell>
                <GridCell colorDef='pink' colorTab='red'>heeee</GridCell>
                <GridCell colorDef='red' colorTab='blue'>heeee</GridCell>
                <GridCell colorDef='yellow' colorTab='lightblue'>heeee</GridCell>
                <GridCell colorDef='lightcoral' colorTab='green'>heeee</GridCell>
                <GridCell colorDef='pink' colorTab='red'>heeee</GridCell>
                <GridCell colorDef='red' colorTab='blue'>heeee</GridCell>

                <GridCell colorDef='red' colorTab='blue'>heeee</GridCell>
                <GridCell colorDef='yellow' colorTab='lightblue'>heeee</GridCell>
                <GridCell colorDef='lightcoral' colorTab='green'>heeee</GridCell></GridContent></GridFullWidthSection>
            </GridCore>
         </>
    );
}

export default App;

