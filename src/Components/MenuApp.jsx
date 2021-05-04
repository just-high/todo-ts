import React from 'react';
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {colors} from "../GlobalStuff";

const MenuAppGrid = styled.div`
  grid-column: 1/span 14;
  display: grid;
  grid-template-columns: 1fr 39.2rem 75.4rem 1fr;
  grid-gap: 0rem;
`
const MenuAppFixContent = styled.div`
  position: fixed;
  overflow: hidden;
  left: calc((100vw - 39.2rem - 75.4rem) / 2);
  top: 3.2rem;
  width:  39.2rem;
  height: calc(100vh - 3.2rem);
  transition: width 2s;
`
const MenuAppFixItem = styled.div`
  z-index: 999;
position: relative;
  left: -39.2rem;
  width:  39.2rem;
  height: calc(100vh - 3.2rem);
  background: ${colors.primary};
  transition: left 0.3s;
  ${props => props.active && css`
    width: 39.2rem;
    left: 0;
  `}
`


const MenuApp = () => {
    const toggleMenuOpen = useSelector(state => state.layout.toggleMenuOpen)
    console.log(toggleMenuOpen)
    return (<>
            <MenuAppFixContent className='dwadawdawdawdawdwadwa'>
                <MenuAppFixItem active={toggleMenuOpen}>
                    adwda
                </MenuAppFixItem>
            </MenuAppFixContent>
        </>
    );
};

export default MenuApp;