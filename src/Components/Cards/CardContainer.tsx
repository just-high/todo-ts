import React, {FC} from "react";
import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import {colors} from "../../GlobalStuff";
import {Flex} from "../../ComponentsLib/Flex";
import Checkbox from "../AtomComponents/Checkbox";
import styled from "styled-components";
import {ICardData} from "../../redux/Interface";

const CardWrapper = styled(GridContent)`
  background: ${colors.darkV};
  margin: 3rem 0;`
const CardContent = styled(GridCell)`
  grid-column: 2/span 10;`

interface ICardContainer {
    onClick: () => void
    id: number
}

export const CardContainer: FC<ICardContainer> = ({id, children, onClick}) => {
    let openEditor = () => {
    }
    return (
        <CardWrapper onClick={onClick}>
            <CardContent>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Checkbox/>
                    <Flex fGrow="1" flexDirection="column" className='current' onClick={openEditor} id={id}
                          justifyContent="space-between">

                        {children}
                    </Flex>
                </Flex>
            </CardContent>
        </CardWrapper>
    );
};
