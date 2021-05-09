import styled from "styled-components";
import {GridCell, GridContent} from "./Grid";
import {colors} from "../GlobalStuff";
import React from "react";
import {InputPriority} from "./InputPriority";
import {Flex} from "./Flex";
import {InputTask} from "../Components/InputTask";
 const ImputCardWrapper = styled(GridContent)`
 `
export const ImputCard = () => {
    return (
        <ImputCardWrapper bgDef={colors.darkV} margin='3rem 0'>
            <GridCell gcDef='2/span 10'>
                <Flex margin='2rem 0'>
                    <InputTask addTask={()=>{}}/>
                    <InputPriority/>
                </Flex>

            </GridCell>
        </ImputCardWrapper>
    )
}