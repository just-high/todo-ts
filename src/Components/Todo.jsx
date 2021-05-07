import React from "react";
import {colors} from "../GlobalStuff";
import styled, {css} from "styled-components";
import {GridCell, GridContent} from "../ComponentsLib/Grid";
import {H1, H2, H3, H4, H5, H6, P} from "../ComponentsLib/Typography";
import {Flex} from "../ComponentsLib/Flex";
import {Timer} from "./Timer";
import {Card, CardMain} from "../ComponentsLib/Card";

const ToDoWrapper = styled.div`
  grid-column: 1/span 12;
  background: ${colors.dark}`
export const Todo = (props) => {
    return (
        <ToDoWrapper><CardMain/>
        <Card/></ToDoWrapper>

    )
}