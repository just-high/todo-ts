import React from "react";
import {
    GridCell,
    GridContent,

} from "../../ComponentsLib/Grid";
import {colors} from "../../GlobalStuff";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";

import {Todo} from './Todo'
import {MenuApp} from "./MenuApp";


const BodyAppContent = styled(GridCell)`
  grid-column: 1/span 12`


const MenuAppWrapper = styled.div`
  width: 0;
  transition: width 0.2s;
  box-shadow: 5px 5px 7px -3px rgba(0, 0, 0, 0.6);
  background: ${colors.darkV};

  ${props => props.active && css`
    width: 30rem;
    z-index: 9999;`}


`
export const BodyApp = () => {

    const toggleMenuOpen = useSelector((state) => state.layout.toggleMenuOpen);

    return (
        <>
            <BodyAppContent>
                <GridContent gtcDef='minmax(0px, auto) 2.4rem 1fr' colGapDef='0rem' bgDef='yellow'>
                    <MenuAppWrapper active={toggleMenuOpen} gcDef='1/span 1'>
                        <MenuApp>
                        </MenuApp>
                    </MenuAppWrapper>
                    <GridCell bgDef={colors.dark} gcDef='2/span 2'><GridContent><Todo/></GridContent></GridCell>
                </GridContent>
            </BodyAppContent>
        </>
    )
    // return (
    //   <GridFullWidthSection>
    //     <BodyAppWrapper active={toggleMenuOpen} bgDef={colors.dark}>
    //       <BodyAppItem
    //         bgDef={colors.dark}
    //         active={toggleMenuOpen}
    //         gcTab="2/span 10"
    //         heightDef="calc(100vh - 3.2rem)"
    //       >
    //         <CardMain>hello</CardMain>
    //         {todayIs}
    //         <Card>
    //           <li>1</li>
    //         </Card>
    //       </BodyAppItem>
    //     </BodyAppWrapper>
    //   </GridFullWidthSection>
    // );
};
