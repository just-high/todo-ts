import React, {FC, useEffect} from "react";
import styled, {css} from "styled-components";
import {colors, getToUpperCase} from "../../GlobalStuff";
import {WhatshotTwoTone} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {Flex} from "../../ComponentsLib/Flex";
import ProjectSelectorEditor from "./ProjectSelectorEditor";
import {ICardData} from "../../redux/Interface";
import {useAppSelector} from "../../hooks";
import TextareasEditor from "./TextareasEditor";
import TitleEditor from "./TitleEditor";
import IconsEditor from "./IconsEditor";
import {SAVE_CHANGE} from "../../redux/cardsSlice";
import Blure from "../AtomComponents/Blure";
import {TOGGLE_EDITOR} from "../../redux/layoutSlice";

interface IEditorWrapper {
    visible: boolean
}

const EdidtorWrapper = styled.div<IEditorWrapper>`
  display: none;
  background: gray;

  ${props => props.visible && css`
    position: absolute;
    border-radius: 5px;
    border: 2px solid gray;
    top: 25%;
    left: 30%;
    display: flex;
    justify-content: center;
    z-index: 10000;
  `}
  & svg {
    font-size: inherit;
  }
`

const ButtonChangeCard = styled.button`
  width: 10rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 0.3rem solid red;
  background: coral;
`

interface IEditor {
    visible: boolean
}

interface IBlure {
    visible: boolean
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void
    id: string
}

const BlurCore = styled.div<IBlure>`
  width: 0;
  height: 0;
  backdrop-filter: blur(0px) opacity(0);
  transition: backdrop-filter 0.2s linear;
  ${props => props.visible && css`
    display: block;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    transition: backdrop-filter 0.3s;
    backdrop-filter: blur(15px) opacity(1);
    z-index: 9999;`}
`
export const Editor: FC<IEditor> = (props) => {
    let dispatch = useDispatch()
    let editCard = useAppSelector(state => state.editor)
    let saveChange = () => {
        dispatch(SAVE_CHANGE(editCard))
        dispatch(TOGGLE_EDITOR())
    }


    let closeEditor = (ev: React.MouseEvent<HTMLDivElement>) => {
            dispatch(TOGGLE_EDITOR())
    }
    let blurS = (ev:React.MouseEvent<HTMLDivElement>) => {
        ev.stopPropagation()
    }
    return (<BlurCore visible={props.visible} id="blure" onClick={closeEditor}>
            <EdidtorWrapper visible={props.visible} onClick={blurS}>
                <TextareasEditor/>
                <Flex flexDirection='column' justifyContent='space-around'>
                    <IconsEditor/>
                    <ProjectSelectorEditor/>
                </Flex>

                <ButtonChangeCard onClick={saveChange}>
                    сохранить
                </ButtonChangeCard>
            </EdidtorWrapper>
        </BlurCore>
    )
}