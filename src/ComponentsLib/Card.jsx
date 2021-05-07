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

const Checkbox = styled.div`
width: 4rem;
height: 4rem;
  margin-right: 2rem;
border: 1px solid dimgrey`
export const Card = (props) => {
    return (
        <GridContent bgDef={colors.darkV} margin='3rem 0'>
            <GridCell gcDef='2/span 10'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Checkbox/>
                    <Flex flexDirection="column" justifyContent="space-between">
                        <Flex justifyContent="space-between" margin="0.5rem 0" alignItems="flex-end">
                            <Title> <H3Card color={colors.primary}>Загововок задачи</H3Card> </Title>
                            <Mod alignItems="flex-end">
                                <Project><H5Card color={colors.secondary}>Проект</H5Card></Project>
                                <Priority><WhatshotTwoTone style={{color: "indianred", fontSize: "3rem"}}/></Priority>
                            </Mod>
                        </Flex>
                        <MainText>
                            <P>ddwaaa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eius, officiis.
                                Accusantium impedit ipsa, itaque iusto maiores mollitia nihil nobis nulla quaerat quod
                                ratione reprehenderit rerum sit sunt ut voluptatibus.
                            </P>
                        </MainText>
                    </Flex>
                </Flex>
            </GridCell>
        </GridContent>
    )
}




