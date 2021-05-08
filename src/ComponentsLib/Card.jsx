import React from "react";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {todayReducer} from "../redux/todayReducer";
import {H1, H2, H3, H4, H5, H6, P} from "./Typography";
import {colors} from "../GlobalStuff";
import {GridCell, GridContent} from "./Grid";
import {Flex} from "./Flex";
import {Timer} from "../Components/Timer";
import {WhatshotTwoTone} from "@material-ui/icons";


export const CardMain = (props) => {
    return (
        <GridContent bgDef={colors.tertiary} margin='3rem 0'>
            <GridCell gcDef='4/span 8'>
                <Flex margin="3rem 0" justifyContent="space-between">
                    <H1>Today</H1>
                    <Timer/>
                </Flex></GridCell>
        </GridContent>
    )
}

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

const CheckboxInput = styled.input`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
`
const Checkbox = () => {
    return (
        <CheckboxWrapper>
            <CheckboxInput type='checkbox'/>
        </CheckboxWrapper>
    )
}


export const Card = (props) => {
    let cardsData = {
        title: "first",
        body: "Сделать тудулист",
        priority: 4,
        flag: "active",
        project: "dwdaw",
        id: 1,
        category: "today"
    }
    return (
        <GridContent bgDef={colors.darkV} margin='3rem 0'>
            <GridCell gcDef='2/span 10'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Checkbox/>
                    <Flex fGrow="1" flexDirection="column" justifyContent="space-between">
                        <Flex justifyContent="space-between" margin="0.5rem 0" alignItems="flex-end">
                            <Title> <H3Card color={colors.primary}>{cardsData.title}</H3Card> </Title>
                            <Mod alignItems="flex-end">
                                <Project><H5Card color={colors.secondary}>{cardsData.project}</H5Card></Project>
                                <Priority><WhatshotTwoTone style={{color: "indianred", fontSize: "3rem"}}/></Priority>
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
    )
}




