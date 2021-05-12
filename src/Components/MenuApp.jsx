import React from "react";
import {Category} from "../ComponentsLib/Category";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {colors} from "../GlobalStuff";
import {GridCell, GridContent} from "../ComponentsLib/Grid";
import {Flex} from "../ComponentsLib/Flex";
import {H1, H2, H3} from "../ComponentsLib/Typography";
import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import AlarmAddTwoToneIcon from '@material-ui/icons/AlarmAddTwoTone';
import AlarmOnTwoToneIcon from '@material-ui/icons/AlarmOnTwoTone';
import {TimerOffTwoTone} from "@material-ui/icons";

let randomColor = require('randomcolor');

const MenuWrapper = styled(GridContent)`
  grid-template-columns: 1fr 1fr repeat(3, 2fr) 1fr;
  grid-gap: 0;
  height: calc(100vh - 3.6rem);
`
const MenuBody = styled(Flex)`
  grid-column: 2/span 4;
  flex-direction: column`


const CategoryWrapper = styled(Flex)`
  margin-top: 3rem;
  padding-top: 3rem;
  flex-direction: column;
  justify-content: left;

  & h1 {

  }
`
const CategoryItem = styled(Flex)`
  flex-direction: row;
  align-items: center;

  & svg {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${props => props.color};
  }
`
const CategoryName = styled.div`
`

const ProjectWrapper = styled(Flex)`
  margin-top: 3rem;
  flex-direction: column;
  align-items: stretch;
`

const ProjectName = styled(Flex)`
  justify-content: left;

  & h3 {
    word-wrap: break-word;
    overflow: hidden;
    text-align: left;
    font-size: 2rem;

  }
`
export const MenuApp = (props) => {
    let randomColors = () => {
        return randomColor({luminosity: 'dark', hue: 'random'})
    }
    let projectList = useSelector(state=>state.project.projectList)
    projectList=projectList.map(el=>  (<ProjectName>
        <H2 as='h3'  color={randomColors} id={el} className="projectNameItem">{el}</H2>
    </ProjectName>))
    const toggleMenuOpen = useSelector((state) => state.layout.toggleMenuOpen);
    return (
        <>
            <MenuWrapper>
                <MenuBody>
                    <CategoryWrapper>
                        <CategoryItem><CategoryName><H1
                            color={colors.tertiary}>Today</H1></CategoryName><TimerTwoToneIcon
                            style={{color: colors.tertiary}}/></CategoryItem>
                        <CategoryItem> <CategoryName><H1
                            color={colors.primary}>Plan</H1></CategoryName><AlarmAddTwoToneIcon
                            style={{color: colors.primary}}/></CategoryItem>
                        <CategoryItem> <CategoryName><H1
                            color={colors.secondary}>Done</H1></CategoryName><AlarmOnTwoToneIcon
                            style={{color: colors.secondary}}/></CategoryItem>
                        <CategoryItem> <CategoryName><H1
                            color={colors.grey2}>Overdue</H1></CategoryName><TimerOffTwoTone
                            style={{color: colors.grey2}}/></CategoryItem>
                    </CategoryWrapper>
                    <ProjectWrapper>
                        {projectList}
                    </ProjectWrapper>

                </MenuBody>
            </MenuWrapper>
        </>
    );
};

