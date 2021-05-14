import React from "react";
import styled from "styled-components";
import {H1, H3, H5, P} from "../../ComponentsLib/Typography";
import {colors} from "../../GlobalStuff";
import {GridCell, GridContent} from "../../ComponentsLib/Grid";
import {Flex} from "../../ComponentsLib/Flex";
import {Timer} from "../Timer";
import {WhatshotTwoTone} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {closeEditorAction, copyEditCardAction} from "../../redux/editorReducer";
import {Editor} from "../Editor/Editor";
import {openEditorAction} from "../../redux/cardsReducer";




const Title = styled.div`
`
const Mod = styled(Flex)`
`
const Project = styled.div`
`
const Priority = styled.div`
`

const MainText = styled.div`
  margin-bottom: 1rem;

  &:after {
    display: block;
    content: "";
    height: 1px;
    width: 30%;
    background: coral;
    position: relative;
    left: -1rem;
    bottom: 1.5rem;
  }

  & p:after {
    display: block;
    content: "";
    height: 2rem;
    width: 1px;
    background: coral;
    position: relative;
    left: -1rem;
    bottom: 1.5rem;
  }

`
const H5Card = styled(H5)`;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: ${props => props.bg || colors.secondary};
    transition: width 0.1s;
  }

  &:hover:after {
    width: 100%;
  }
`
const H3Card = styled(H3)`;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: ${props => props.color || colors.secondary};
    transition: width 0.1s;

  }

  &:hover:after {
    width: 100%;
  }
`

const CheckboxWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;`

const CheckboxRounded = styled.div`
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid ${colors.primary};
`
const CheckboxRoundedFill = styled.div`
  background: green;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%`


const Checkbox = () => {
    return (
        <CheckboxWrapper>
            <CheckboxRounded>
                <CheckboxRoundedFill>

                </CheckboxRoundedFill>
            </CheckboxRounded>
        </CheckboxWrapper>
    )
}


export const Card = (props) => {
    let cardsEditData = useSelector(state => state.editor.editedCard)
    let dispatch = useDispatch()
    const cardsData = props.data
    let title = cardsData.title[0].toUpperCase() + cardsData.title.slice(1)
    let color = (cardsData) => {
        // eslint-disable-next-line default-case
        switch (cardsData.priority) {
            case "high":
                return "indianred"
            case "mid":
                return "sandybrown"
            case "low":
                return "palegreen"
        }
    }
    let id = cardsData.id
    let openEditor = () => {
        dispatch(closeEditorAction())
        dispatch(openEditorAction(id))
        dispatch(copyEditCardAction(cardsData))
    }
    return (
        <>
            <GridContent bgDef={colors.darkV} margin='3rem 0'>
                <GridCell gcDef='2/span 10'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Checkbox/>
                        <Flex fGrow="1" flexDirection="column" className='current' onClick={openEditor} id={id} justifyContent="space-between">
                            <Flex justifyContent="space-between"  margin="0.5rem 0" alignItems="flex-end">
                                <Title> <H3Card color={colors.primary}>{title}</H3Card> </Title>
                                <Mod alignItems="flex-end">
                                    <Project><H5Card color={colors.secondary}>{cardsData.project}</H5Card></Project>
                                    <Priority><WhatshotTwoTone
                                        style={{color: color(cardsData), fontSize: "3rem"}}/></Priority>
                                </Mod>
                            </Flex>
                            <MainText>
                                <P>{cardsData.body}
                                </P>
                            </MainText>
                        </Flex>
                    </Flex>
                </GridCell>
            </GridContent>
            <Editor id={id} cardsEditData={cardsEditData} visible={cardsData.editorStateVisible}/>
        </>
    )
}