import React, {FC} from "react";
import {CardContainer} from "./CardContainer";
import {CardHeader} from "./CardHeader";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ICardData} from "../../redux/Interface";
import CardText from "./CardText";
import {TOGGLE_EDITOR} from "../../redux/layoutSlice";
import {COPY_EDIT_CARD} from "../../redux/editorSlice";


interface ICadr {
    data: ICardData
    id: number
}
export const Card: FC<ICadr> = ({data, id}) => {
    let dispatch = useAppDispatch()
    let cardsEditData = useAppSelector(state => state.editor)
    let openEditor = () => {
        dispatch(COPY_EDIT_CARD(data))
        dispatch(TOGGLE_EDITOR())
        console.log(data)
    }

    return (
        <CardContainer id={id} onClick={openEditor}>
            <CardHeader cardsData={data}></CardHeader>
            <CardText cardsData={data}/>
        </CardContainer>
    )
}








