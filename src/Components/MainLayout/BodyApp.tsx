import React, {FC} from 'react';
import {
    GridCell,
    GridContent,

} from "../../ComponentsLib/Grid";
import {colors} from "../../GlobalStuff";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";

import {Todo} from './Todo'
import MenuApp from "./MenuApp";

const BodyAppWrapper = styled(GridCell)`
  grid-column: 1/span 12`

const BodyAppContent = styled(GridContent)`
  grid-template-columns: minmax(0px, auto) 2.4rem 1fr;
  column-gap: 0rem;`


const TodoWrapper = styled(GridCell)`
  background: ${colors.dark};
  grid-column: 2/span 2;
`

const BodyApp: FC = () => {
    return (
        <BodyAppWrapper>
            <BodyAppContent>
                <MenuApp/>
                <TodoWrapper><GridContent><Todo/></GridContent></TodoWrapper>
            </BodyAppContent>

        </BodyAppWrapper>
    );
};

export default BodyApp;