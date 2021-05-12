import styled from "styled-components";
import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import {colors} from "../../GlobalStuff";
import React from "react";
import {Flex} from "../../ComponentsLib/Flex";
import {InputTask} from "./InputTask";
import {PriorityButtons} from "./PriorityButtons";
import {useSelector} from "react-redux";
import {InputSelectProject} from "./InputSelectProject";


const InputCardWrapper = styled(GridContent)`S
`
export const InputCard = () => {
    let onClick = (e) => {
        console.log(e.currentTarget)
    }
    let data = useSelector(state => state.input.radioPriority.list)
    return (
        <InputCardWrapper bgDef={colors.darkV} margin='3rem 0'>
            <GridCell gcDef='2/span 10'>
                <Flex margin='2rem 0'>
                    <InputTask addTask={() => {
                    }}/>
                    <PriorityButtons click={onClick} data={data}/>
                    <InputSelectProject/>
                </Flex>

            </GridCell>
        </InputCardWrapper>
    )
}