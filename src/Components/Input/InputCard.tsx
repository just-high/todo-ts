import styled from "styled-components";
import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import {colors} from "../../GlobalStuff";
import React from "react";
import {Flex} from "../../ComponentsLib/Flex";
import {InputTask} from "./InputTask";
import {PriorityButtons} from "./PriorityButtons";
import {useSelector} from "react-redux";
import {InputSelectProject} from "./InputSelectProject";
import {useAppSelector} from "../../hooks";


const InputCardWrapper = styled(GridContent)`
  margin: 3rem 0;
  background: ${props => props.color};
`

const InputCardContent = styled(GridCell)`
  grid-column: 2/span 10;
`
export const InputCard = () => {

    return (
        <InputCardWrapper color={colors.darkV}>
            <InputCardContent>
                <Flex margin='2rem 0'>
                    <InputTask/>
                    <PriorityButtons/>
                    <InputSelectProject/>
                </Flex>

            </InputCardContent>
        </InputCardWrapper>
    )
}