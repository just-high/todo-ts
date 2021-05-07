import React from "react";
import { Category } from "../ComponentsLib/Category";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { colors } from "../GlobalStuff";

const Test = styled.div`
height: calc(100vh - 3.6rem);
`
export const MenuApp = (props) => {
  const toggleMenuOpen = useSelector((state) => state.layout.toggleMenuOpen);
  return (
    <>
 <Test>dawdaw</Test>
    </>
  );
};

