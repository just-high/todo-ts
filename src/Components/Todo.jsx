import React from "react";
import {colors} from "../GlobalStuff";
import styled, {css} from "styled-components";
import {GridCell, GridContent} from "../ComponentsLib/Grid";
import {H1, H2, H3, H4, H5, H6, P} from "../ComponentsLib/Typography";
import {Flex} from "../ComponentsLib/Flex";
import {Timer} from "./Timer";
import {Card, CardMain} from "../ComponentsLib/Card";

const ToDoWrapper = styled.div`
  max-height: calc(100vh - 3.6rem);
  overflow: hidden;
  grid-column: 1/span 12;
  background: ${colors.dark}`
const Cards = styled.div`
  max-height: calc(100vh - 11.6rem - 3.6rem);
  overflow: auto;`
export const Todo = (props) => {
    return (
        <ToDoWrapper>
            <CardMain/>

         <Cards> <Card/> <Card/><Card/><Card/><Card/><Card/><Card/><Card/></Cards>
        </ToDoWrapper>

    )
}