import React, {FC} from "react";
import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import ListIcon from "@material-ui/icons/List";
import styled from "styled-components";
import {colors} from "../../GlobalStuff";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {TOGGLE_MENU_OPEN} from "../../redux/layoutSlice";

const NavContent = styled.div`
  display: grid;
  column-gap: 2.4rem;
  grid-column: 1/span 12;
  grid-template-columns: repeat(12, minmax(auto, 9.6rem));
  background: ${colors.grey1};
  height: 3.2rem;
  z-index: 999;
  box-shadow: 5px 5px 7px -3px rgba(0, 0, 0, 0.6);
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;`

const NavApp: FC = () => {
        const dispatch = useAppDispatch()
    const toogleMenuOpen = useAppSelector(state=>state.layout.toggleMenuOpen)
    let onClick = () => {
            dispatch(TOGGLE_MENU_OPEN())
    }
    return (
        <NavContent>
            <GridCell>
                <Center>
                    <ListIcon
                        style={{fontSize: 32}}
                        onClick={onClick}/>
                </Center>
            </GridCell>
        </NavContent>
    );
};

export default NavApp;


// interface INavGridContent {
//     bgDef: string,
//     heightDef: string,
// }
// const NavGridContent = styled(GridContent)<INavGridContent>`
//   z-index: 999;
//   box-shadow: 5px 5px 7px -3px rgba(0, 0, 0, 0.6);
// `
// const Center = styled.div`
// display: flex;
// justify-content: center;
// align-content: center;`
// const NavApp: FC = () => {
//     const dispatch = useAppDispatch()
//     const toogleMenuOpen = useAppSelector(state=>state.layout.toggleMenuOpen)
//     let onClick = () => {
//     }
//     return (
//         <NavGridContent bgDef={colors.grey1} heightDef="3.2rem">
//             <GridCell>
//                 <Center>
//                     <ListIcon
//                         style={{ fontSize: 32 }}
//                         onClick={onClick}/>
//                 </Center>
//             </GridCell>
//         </NavGridContent>
//     )
// }
// export default NavApp
