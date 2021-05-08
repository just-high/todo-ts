import styled from "styled-components";
import {GridCell, GridContent} from "./Grid";
import {colors} from "../GlobalStuff";
import React from "react";
import {InputPriority} from "./InputPriority";
import {Flex} from "./Flex";

export const ImputCard = () => {
    return (
        <GridContent bgDef={colors.darkV} margin='3rem 0'>
            <GridCell gcDef='2/span 10'>
                <Flex>
                    <InputPriority/>
                </Flex>

            </GridCell>
        </GridContent>
    )
}