import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import {colors} from "../../GlobalStuff";
import {Flex} from "../../ComponentsLib/Flex";
import {H1} from "../../ComponentsLib/Typography";
import {Timer} from "../Timer";
import React from "react";
import {useSelector} from "react-redux";

export const CardMain = (props) => {
    let color = useSelector(state=>state.layout.activeColorMainCard)
    return (
        <GridContent bgDef={color} margin='3rem 0'>
            <GridCell gcDef='4/span 8'>
                <Flex margin="3rem 0" justifyContent="space-between">
                    <H1>{props.title}</H1>
                    <Timer/>
                </Flex></GridCell>
        </GridContent>
    )
}