import React from "react";
import {colors} from "../GlobalStuff";
import styled from "styled-components";
import {Card, CardMain} from "../ComponentsLib/Card";
import {InputCard} from "./Input/InputCard";
import {useSelector} from "react-redux";

const ToDoWrapper = styled.div`
  max-height: calc(100vh - 3.6rem);
  overflow: auto;
  grid-column: 1/span 12;
  background: ${colors.dark}`
const Cards = styled.div`
  max-height: calc(100vh - 11.6rem - 3.6rem - 12.8rem);
`


export const Todo = () => {
    let activeFilter = useSelector(state => state.layout.activeFilter)
    let cardsData = useSelector(state => state.cards.cardsData)
    let activeCardData = cardsData.filter(el=> (el.category===activeFilter|| el.project===activeFilter))
    let activeCardsItem = activeCardData.map(el => <Card data={el}/>)
    return (
        <ToDoWrapper>
            <CardMain/>
            <InputCard/>
            <Cards> {activeCardsItem} </Cards>
        </ToDoWrapper>

    )
}