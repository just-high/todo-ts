import React, {FC} from "react";
import {PriorityButton} from "./PriorityButton";
import {Flex} from "../../ComponentsLib/Flex";
import {useAppSelector} from "../../hooks";

export const PriorityButtons: FC = () => {
    let buttonsData = useAppSelector(state => state.layout.priorityList)
    let buttonsMap = buttonsData.map(el => <PriorityButton id={el}/>)
    return (
        <Flex flexDirection="column">
            {buttonsMap}
        </Flex>

    )
}