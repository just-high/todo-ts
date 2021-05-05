import React from "react";
import {GridCell, GridContent, GridFullWidthSection} from "../ComponentsLib/Grid";
import {H1, H2, H3, H4, H5, H6, P} from "../ComponentsLib/Typography";
import {colors} from "../GlobalStuff";

export const BodyApp = () => {
    return (
        <GridFullWidthSection>
            <GridContent bgDef={colors.darkV}>
                <GridCell bgDef={colors.dark} gcDef="2/span 8" gcTab='2/span 4' heightDef="calc(100vh - 3.2rem)">
                    <button>push</button>
                </GridCell>
            </GridContent>
        </GridFullWidthSection>
    )
}