import React from 'react';
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";

const MenuAppGrid = styled.div`
  grid-column: 1/span 14;
  display: grid;
  grid-template-columns: 1fr 39.2rem 75.4rem 1fr;
  grid-gap: 0rem;
`
const MenuAppGridContent = styled.div`
  grid-column: 2/span 2;
`
const MenuAppGridItem = styled.div`
  position: fixed;
  left: calc((100vw - 39.2rem - 75.4rem) / 2);
  top: 3.2rem;
  width: 0;
  height: calc(100vh - 3.2rem);
  background: green;
  transition: width 2s;
${props => props.active && css `
width: 39.2rem;
`}
`

const MenuApp = () => {
    const toggleMenuOpen = useSelector(state => state.toggleMenuOpen)
    console.log(toggleMenuOpen)
    return (<>
        <MenuAppGridItem active={toggleMenuOpen}>
            adwda
        </MenuAppGridItem>
        </>
    );
};

export default MenuApp;