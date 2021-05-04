import React from "react";
import {GridCell, GridContent, GridCore, GridFullWidthSection} from "../ComponentsLib/Grid";
import ListIcon from "@material-ui/icons/List";


const Nav = (props)=>{
    return(
        <GridFullWidthSection>
            <GridContent colorDef="purple" heightDef="68px">
                <GridCell>
                    <ListIcon
                        onClick={onClick}/>
                </GridCell>
            </GridContent>
        </GridFullWidthSection>
    )
}