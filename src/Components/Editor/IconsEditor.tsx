import React, {FC} from 'react';
import {WhatshotTwoTone} from "@material-ui/icons";
import styled, {css} from "styled-components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {PRIORITY_CHANGE} from "../../redux/editorSlice";

const IconsWrapper = styled.div`
  display: flex;
  
  align-items: center`
const IconBox = styled.div<any>`
  margin: 1rem;
  font-size: 4rem;
  transform: scale(1.6);
  transition: transform 0.2s;
  ${props=>props.selected && css`
    transform: scale(2.1);
    transition: transform 0.2s;`}
`
// ${props => props.selected && css`
//   transform: scale(2.5);
//   font-size: 3rem;
// `}



const IconsEditor: FC = () => {
    let dispatch = useAppDispatch()
    let priorityChange = (ev:React.ChangeEvent<HTMLDivElement>) => {
        dispatch(PRIORITY_CHANGE(ev.currentTarget.id))
    }
    let priorityList = useAppSelector(state=> state.layout.priorityList)
    let color = (cardsData:string) => {
        switch (cardsData) {
            case "high":
                return "indianred"
            case "mid":
                return "sandybrown"
            case "low":
                return "palegreen"
        }
    }
    let selected = useAppSelector(state=>state.editor.priority)
    let priorityItem = priorityList.map(el => <IconBox selected={el===selected} id={el} onClick={priorityChange}  ><WhatshotTwoTone
        style={{color: color(el)}}/></IconBox>)
    return (
        <IconsWrapper>
            {priorityItem}
            {/*<IconBox selected={cardsEditData.priority === "mid"}  id="mid"*/}
            {/*         onClick={priorityChange}><WhatshotTwoTone*/}
            {/*    style={{color: color("mid")}}/></IconBox>*/}
            {/*<IconBox selected={cardsEditData.priority === "low"}  id="low"*/}
            {/*         onClick={priorityChange}><WhatshotTwoTone*/}
            {/*    style={{color: color("low")}}/></IconBox>*/}
        </IconsWrapper>
    );
};

export default IconsEditor;