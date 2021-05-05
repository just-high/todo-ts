import ListIcon from '@material-ui/icons/List';
import {GridFullWidthSection, Grid, GridCell, GridContent, GridCore} from "./ComponentsLib/Grid";


import {useState} from "react";
import {H1, H2, H3, H4, H5, P, H6} from "./ComponentsLib/Typography";
import breakpointsMaxWidth from "./ComponentsLib/breakpoints";
import NavApp from "./Components/NavApp";
import {BodyApp} from "./Components/BodyApp";
import MenuApp from "./Components/MenuApp";

let {tablet, mobileL, mobileS} = breakpointsMaxWidth

function App() {
    return (
        <>
            <GridCore heightDef="100vh">
                    <NavApp/>
                    <BodyApp/>
                    <MenuApp/>
            </GridCore>

        </>
    )

}

export default App;

