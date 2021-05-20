import React, {FC} from "react";
import {Flex} from "../../ComponentsLib/Flex";
import {colors} from "../../GlobalStuff";
import {WhatshotTwoTone} from "@material-ui/icons";
import styled from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import {ICardData} from "../../redux/Interface";

const Project = styled.div`
`
const Priority = styled.div`
`
const Title = styled(H3)`
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
const Mod = styled(Flex)`
`

interface ICardHeader{
cardsData: ICardData
}
export const CardHeader: FC<ICardHeader> = ({cardsData}) => {
    let title = cardsData.title
    let color = (cardsData: ICardData) => {
        switch (cardsData.priority) {
            case "high":
                return "indianred"
            case "mid":
                return "sandybrown"
            case "low":
                return "palegreen"
        }
    }
    return (
        <Flex justifyContent="space-between" margin="0.5rem 0" alignItems="flex-end">
            <Title color={colors.primary}>{title} </Title>
            <Mod alignItems="flex-end">
                <Project><Title color={colors.secondary}>{cardsData.project}</Title></Project>
                <Priority><WhatshotTwoTone
                    style={{color: color(cardsData)
                        , fontSize: "3rem"}}/></Priority>
            </Mod>
        </Flex>
    );
};