import React from "react";
import styled, {css} from "styled-components";
import {colors, getToUpperCase} from "../../GlobalStuff";
import {TextareaAutosize} from "@material-ui/core";
import {PriorityButtons} from "../Input/PriorityButtons";
import {WhatshotTwoTone} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedProjectAction} from "../../redux/inputReducer";
import {Flex} from "../../ComponentsLib/Flex";
import {
    bodyChangeAction,
    priorityChangeAction,
    projectChangeAction,
    titleChangeAction
} from "../../redux/editorReducer";
import {saveChangesAction} from "../../redux/cardsReducer";



const EdidtorWrapper = styled.div`
  display: none;
  background: gray;
    ${props => props.visible && css `
      display: flex;
    background: coral`}
  & svg {
    font-size: inherit;
  }
`

//blue Body and title section---------------------

const BodyTextarea = styled.textarea`
  width: 45rem;
  height: 8.5rem;
  border: 1px solid ${colors.grey1};
  font-family: Montserrat, serif;
  font-size: 3rem;
  background: ${colors.dark};
  resize: none;
`
const TitleTextarea = styled.textarea`
  width: 45rem;
  height: 4.5rem;
  border: 1px solid ${colors.grey1};
  font-family: Montserrat, serif;
  font-size: 3rem;
  background: ${colors.dark};
  resize: none;
`
const TextareaBlock = styled.div`
  display: flex;
  flex-direction: column`
//blue----------------------------

//yellow Icon section-----------------
const IconsWrapper = styled.div`
  display: flex;
  
  align-items: center`
const IconBox = styled.div`
  margin: 1rem;
  font-size: 4rem;
  transform: scale(2);
  ${props => props.selected && css`
    transform: scale(2.5);
    font-size: 3rem;
  `}
`
//yellow ----------------------------------
// green Select Section --------------------------------
const SelectProjectWrapper = styled.div`
`
const ButtonChangeCard = styled.button`
width: 10rem;
height: 4rem;
border-radius: 0.5rem;
  border: 0.3rem solid red;
  background: coral;
`
export const Editor = (props) => {
    let cardsEditData = props.cardsEditData
    let selectedProject = cardsEditData.project
    console.log(selectedProject)
    let color = (cardsData) => {
        // eslint-disable-next-line default-case
        switch (cardsData) {
            case "high":
                return "indianred"
            case "mid":
                return "sandybrown"
            case "low":
                return "palegreen"
        }
    }
    let projectList = useSelector(state => state.projects.projectList)
    let dispatch = useDispatch()
    let bodyChange = (ev) => {
        dispatch(bodyChangeAction(ev.target.value))
    }
    let titleChange = (ev) => {
        dispatch(titleChangeAction(ev.target.value))
    }
    let priorityChange = (ev) => {
        dispatch(priorityChangeAction(ev.currentTarget.id))
    }
    let projectChange = (ev) => {
        dispatch(projectChangeAction(ev.currentTarget.value))
    }
    let editingCard = useSelector(state=> state.editor.editedCard)
    let saveChange = () => {
        dispatch(saveChangesAction(props.id, editingCard))
    }
    let options = projectList.map(el => <option key={el.name} value={el.name}>{el.name}</option>)
    return (
        <EdidtorWrapper visible={props.visible}>
            <TextareaBlock>
                <TitleTextarea
                    value={getToUpperCase(cardsEditData.title)}
                    onChange={titleChange}>
                </TitleTextarea>
                <BodyTextarea
                    value={getToUpperCase(cardsEditData.body)}
                    onChange={bodyChange}>
                </BodyTextarea>
            </TextareaBlock>
            <Flex flexDirection='column' justifyContent='space-around'>
                <IconsWrapper>
                    <IconBox selected={cardsEditData.priority === "high"} id="high"
                             onClick={priorityChange}><WhatshotTwoTone
                        style={{color: color("high")}}/></IconBox>
                    <IconBox selected={cardsEditData.priority === "mid"}  id="mid"
                             onClick={priorityChange}><WhatshotTwoTone
                        style={{color: color("mid")}}/></IconBox>
                    <IconBox selected={cardsEditData.priority === "low"}  id="low"
                             onClick={priorityChange}><WhatshotTwoTone
                        style={{color: color("low")}}/></IconBox>
                </IconsWrapper>
                <SelectProjectWrapper>
                    <select name="selectProject" value={selectedProject} onChange={projectChange}  id="selectProject">
                        <option disabled value={"Choose a project"}>Choose a project</option>
                        {options}
                    </select>
                </SelectProjectWrapper>
            </Flex>
            <ButtonChangeCard onClick={saveChange}>
                Сохранить
            </ButtonChangeCard>

        </EdidtorWrapper>
    )
}