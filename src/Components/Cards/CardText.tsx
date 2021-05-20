import React, {FC} from 'react';
import {P} from "../../ComponentsLib/Typography";
import styled from "styled-components";
import {ICardData} from "../../redux/Interface";

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
interface ICardText {
    cardsData: ICardData
}

export const CardText: FC<ICardText> = ({cardsData}) => {
    return <MainText>
        <P>{cardsData.body}
        </P>
    </MainText>
};

export default CardText;
