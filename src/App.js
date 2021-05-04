import ListIcon from '@material-ui/icons/List';
import {GridFullWidthSection, Grid, GridCell, GridContent, GridCore} from "./ComponentsLib/Grid";


import {useState} from "react";
import {H1, H2, H3, H4, H5, P, H6} from "./ComponentsLib/Typography";
import breakpointsMaxWidth from "./ComponentsLib/breakpoints";

let {tablet, mobileL, mobileS} = breakpointsMaxWidth

function App() {

    return <GridCore heightDef="100vh">
        <GridFullWidthSection>
            <GridContent colorDef="purple" heightDef="68px">
                <GridCell>
                    <ListIcon
                        onClick={onClick}/>
                </GridCell>
            </GridContent>
        </GridFullWidthSection>
        <GridFullWidthSection>
            <GridContent colorDef='green'>
                <GridCell colorDef='green' heightDef="calc(100vh - 68px)">
                    <H1 color="blue">H1 text</H1>
                    <H2>H1 text</H2>
                    <H3>h3tex</H3>
                    <H4>h4 text</H4>
                    <H5>h5 text</H5>
                    <P> Ptext </P>
                    <H6> h6 Text</H6></GridCell>
                <GridCell colorDef='yellow' gcDef="5/span 8" heightDef="calc(100vh - 68px)">
                    <button>push</button>
                </GridCell>
            </GridContent>
        </GridFullWidthSection>
    </GridCore>


}

export default App;

