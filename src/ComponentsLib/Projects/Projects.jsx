import React from "react";
import styled from "styled-components";
import {Project} from "./Project";


const ProjectsWrapper = styled.div`
  margin-top: 5rem;
    display: flex;
  flex-direction: column;
  align-self: flex-start;
`
export const Projects = (props) => {
    let projectsItem = props.data.map(el=> <Project data={el}/>)
    return(
        <ProjectsWrapper>
            {projectsItem}
        </ProjectsWrapper>
    )
}