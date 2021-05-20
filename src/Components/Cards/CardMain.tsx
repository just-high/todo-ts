import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import {Flex} from "../../ComponentsLib/Flex";
import {H1} from "../../ComponentsLib/Typography";
import {Timer} from "../Timer";
import React, {FC} from "react";
import styled from "styled-components";

interface ICardMain {
    title: string
    color: string
}

interface ICardWrapper {
    color: string
}

const CardWrapper = styled(GridContent)<ICardWrapper>`
  margin: 3rem 0;
  background: ${props => props.color};`

const CardContent = styled(GridCell)`
  grid-column: 4/span 8;`

export const CardMain: FC<ICardMain> = ({title, color}) => {
    return (
        <CardWrapper color={color}>
            <CardContent>
                <Flex margin="3rem 0" justifyContent="space-between">
                    <H1>{title}</H1>
                    <Timer/>
                </Flex>
            </CardContent>
        </CardWrapper>
    )
}