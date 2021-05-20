import {GridContent} from "./ComponentsLib/Grid";
import breakpointsMaxWidth from "./ComponentsLib/breakpoints";
import NavApp from "./Components/MainLayout/NavApp";
import BodyApp from "./Components/MainLayout/BodyApp";
import {Flex} from "./ComponentsLib/Flex";
import styled from "styled-components";
import React, {FC} from 'react';


const AppGridContent = styled(GridContent)`
`
const AppWrapper = styled(Flex)`
  justify-content: center;
`

const App: FC = () => {
    return (
        <AppWrapper>
            <AppGridContent>
                <NavApp/>
                <BodyApp/>
            </AppGridContent>
        </AppWrapper>
    );
};

export default App;


// function App() {
//     return <Flex justifyContent="center">
//                 <AppGridContent>
//                     <NavApp/>
//
//                 </AppGridContent>
//             </Flex>
//
// }

//
