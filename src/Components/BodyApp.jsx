import React from "react";
import {GridCell, GridContent, GridFullWidthSection} from "../ComponentsLib/Grid";
import {H1, H2, H3, H4, H5, H6, P} from "../ComponentsLib/Typography";
import {colors} from "../GlobalStuff";

export const BodyApp = () => {
    return (
        <GridFullWidthSection>
            <GridContent bgDef={colors.darkV}>
                <GridCell bgDef={colors.darkV} gcDef="1/span 4" gcTab='1/span 2' heightDef="calc(100vh - 3.2rem)">
                    <H1 margin='1rem 2rem'>H1 text</H1>
                    <H2 margin='1rem 2rem'>H1 text</H2>
                    <H3 margin='1rem 2rem'>h3tex</H3>
                    <H4 margin='1rem 2rem'>h4 text</H4>
                    <H5>h5 text</H5>
                    <P> Ptext </P>
                    <H6> h6 Text</H6></GridCell>
                <GridCell bgDef={colors.dark} gcDef="5/span 8" gcTab='3/span 4' heightDef="calc(100vh - 3.2rem)">
                    <button>push</button>
                </GridCell>
            </GridContent>
        </GridFullWidthSection>
    )
}