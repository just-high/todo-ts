import React from "react";
import {GridCell, GridContent, GridFullWidthSection} from "../ComponentsLib/Grid";
import {H1, H2, H3, H4, H5, H6, P} from "../ComponentsLib/Typography";
import {colors} from "../GlobalStuff";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {Flex} from "../ComponentsLib/Flex";
import {Card} from "../ComponentsLib/Card";

const BodyAppWrapper = styled(GridContent)`
  grid-column: 2/span 12;
`
const BodyAppItem = styled(GridCell)`

  transition: grid-column 2s;
  grid-column: 1/span 12;
  background: ${colors.dark};
  ${props => props.active && css`
    grid-column: 5/span 8 `}
`
const Ul = styled.ul`
  background: red;
  width: 100px`
export const BodyApp = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDay()
    if (day<10){
        day = `0${day}`
    }
    if (month<10){
        month = `0${month}`
    }

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let secinds = now.getSeconds()
    let milliseconds = now.getMilliseconds()
    let todayIs = `${day}.${month}.${year}`
    console.log(hours, minutes, secinds, milliseconds)
    const toggleMenuOpen = useSelector(state => state.layout.toggleMenuOpen)
    return (
        <GridFullWidthSection>
            <BodyAppWrapper active={toggleMenuOpen} bgDef={colors.dark}>
                <BodyAppItem bgDef={colors.dark} active={toggleMenuOpen} gcTab='2/span 10'
                             heightDef="calc(100vh - 3.2rem)">


                            {todayIs}
                            <Card><li>1</li></Card>



                </BodyAppItem>
            </BodyAppWrapper>
        </GridFullWidthSection>
    )
}