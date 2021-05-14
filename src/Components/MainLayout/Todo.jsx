import React from "react";
import {colors} from "../../GlobalStuff";
import styled from "styled-components";
import {Card} from "../Cards/Card";
import {CardMain} from "../Cards/CardMain";
import {InputCard} from "../Input/InputCard";
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
    let activeFilterTitle= activeFilter[0].toUpperCase() + activeFilter.slice(1)
    let cardsData = useSelector(state => state.cards.cardsData)
    let activeCardData = cardsData.filter(el=> (el.category===activeFilter|| el.project===activeFilter))
    let activeCardsItem = activeCardData.map((el, idx) => <Card data={el} index={idx}/>)
    return (
        <ToDoWrapper>
            <CardMain title={activeFilterTitle} color="red"/>
            <InputCard/>
            <Cards> {activeCardsItem} </Cards>
        </ToDoWrapper>

    )
}