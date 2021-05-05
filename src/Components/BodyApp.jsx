import React from "react";
import {GridCell, GridContent, GridFullWidthSection} from "../ComponentsLib/Grid";
import {H1, H2, H3, H4, H5, H6, P} from "../ComponentsLib/Typography";
import {colors} from "../GlobalStuff";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";

const BodyAppWrapper = styled(GridContent)`
  transition: grid-column 2s;
`

export const BodyApp = () => {
    const toggleMenuOpen = useSelector(state => state.toggleMenuOpen)
    return (
        <GridFullWidthSection>
            <BodyAppWrapper active={toggleMenuOpen} bgDef={colors.darkV}>
                <GridCell bgDef={colors.dark} gcDef="2/span 10" gcTab='2/span 10' heightDef="calc(100vh - 3.2rem)">
                    <button>push</button>
                </GridCell>
            </BodyAppWrapper>
        </GridFullWidthSection>
    )
}