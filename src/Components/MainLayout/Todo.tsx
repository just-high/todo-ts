import React, {FC} from "react";
import {colors} from "../../GlobalStuff";
import styled from "styled-components";
import {Card} from "../Cards/Card";
import {CardMain} from "../Cards/CardMain";
import {InputCard} from "../Input/InputCard";
import {useAppSelector} from "../../hooks";
import {Editor} from "../Editor/Editor";

const ToDoWrapper = styled.div`
  max-height: calc(100vh - 3.6rem);
  overflow: auto;
  grid-column: 1/span 12;
  background: ${colors.dark}`
const Cards = styled.div`
  max-height: calc(100vh - 11.6rem - 3.6rem - 12.8rem);
`


export const Todo :FC = () => {
    let layout = useAppSelector(state => state.layout)
    let activeFilterTitle= layout.activeFilter[0].toUpperCase() + layout.activeFilter.slice(1)
    let cardsData = useAppSelector(state => state.cards)
    let editorIsOpen = useAppSelector(state => state.layout.editorData.editorIsOpen)
    let activeCardData = cardsData.filter(el=> (el.category===layout.activeFilter|| el.project===layout.activeFilter))
    let activeCardsItem = activeCardData.map((el, idx) => <Card data={el} id={idx}/>)
    return (
        <ToDoWrapper>
            <CardMain title={activeFilterTitle} color={layout.activeColorMainCard}/>
            <InputCard/>
            <Cards> {activeCardsItem} </Cards>
            <Editor visible={editorIsOpen}/>
        </ToDoWrapper>

    )
}