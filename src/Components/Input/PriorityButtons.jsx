import React from "react";
import {PriorityButton} from "../../ComponentsLib/PriorityButton";
import {Flex} from "../../ComponentsLib/Flex";

export const PriorityButtons = (props) => {
    let buttonsData = props.data
    let buttonsMap = buttonsData.map(el => <PriorityButton>{el}</PriorityButton>)
    return (
        <Flex flexDirection="column">
            {buttonsMap}
        </Flex>

    )
}