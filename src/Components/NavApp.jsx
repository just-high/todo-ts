import React from "react";
import {GridCell, GridContent, GridCore, GridFullWidthSection} from "../ComponentsLib/Grid";
import ListIcon from "@material-ui/icons/List";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {colors} from "../GlobalStuff";

const Center = styled.div`
display: flex;
justify-content: center;
align-content: center;`

const NavApp = (props) => {
    const dispatch = useDispatch()
    const toggleMenuOpen = useSelector(state => state.toggleMenuOpen)
    let onClick = () => {
        dispatch({type:"toggleMenuOpen"})
        console.log(toggleMenuOpen)
    }
    return (
        <GridFullWidthSection>
            <GridContent bgDef={colors.grey1} heightDef="3.2rem">
                <GridCell>
                    <Center>
                        <ListIcon
                            style={{ fontSize: 32 }}
                            onClick={onClick}/>
                    </Center>
                </GridCell>
            </GridContent>
        </GridFullWidthSection>
    )
}

export default NavApp
