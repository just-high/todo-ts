import React from "react";
import styled from "styled-components";
import Project from "./Project";
import {useAppSelector} from "../../hooks";


const ProjectsWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`
export const Projects = () => {
    let projectsData = useAppSelector(state => state.projects)
    let projectsItem = projectsData.map(el => <Project data={el}/>)
    return (
        <ProjectsWrapper>
            {projectsItem}
        </ProjectsWrapper>
    )
}