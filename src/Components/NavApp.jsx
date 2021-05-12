import React from "react";
import {GridCell, GridContent, GridCore, GridFullWidthSection} from "../ComponentsLib/Grid";
import ListIcon from "@material-ui/icons/List";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {colors} from "../GlobalStuff";
import {toggleMenuAction} from "../redux/layoutReducer";

const Center = styled.div`
display: flex;
justify-content: center;
align-content: center;`

const NavGridContent = styled(GridContent)`
  z-index: 999;
  box-shadow: 5px 5px 7px -3px rgba(0, 0, 0, 0.6);
`

const NavApp = (props) => {
    const dispatch = useDispatch()
    const toggleMenuOpen = useSelector(state => state.toggleMenuOpen)
    let onClick = () => {
        dispatch(toggleMenuAction())
        console.log(toggleMenuOpen)
    }
    return (
            <NavGridContent bgDef={colors.grey1} heightDef="3.2rem">
                <GridCell>
                    <Center>
                        <ListIcon
                            style={{ fontSize: 32 }}
                            onClick={onClick}/>
                    </Center>
                </GridCell>
            </NavGridContent>
    )
}

export default NavApp
