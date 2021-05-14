import React from "react";
import styled from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import {BorderBottom} from "../Animation/borderBottom";
import {changeActiveFilterAndColorAction} from "../../redux/layoutReducer";
import {useDispatch, useSelector} from "react-redux";

const ProjectBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin-top: 1rem;
`;

const ProjectName = styled.div`
  & h3 {
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }`;

export const Project = (props) => {
    let projectsData = props.data
    let color = projectsData.color
    console.log(projectsData)
    let dispatch = useDispatch()
    let changeActiveFilter = (ev) => {
        dispatch(changeActiveFilterAndColorAction(ev.currentTarget.id, color))
    }
    let activeFilter = useSelector(state => state.layout.activeFilter)
    return (
        <>
            <ProjectBody onClick={changeActiveFilter} id={projectsData.name}>
                <BorderBottom active={activeFilter===projectsData.name} color={color} margin="0.5rem">
                    <ProjectName>
                        <H3 color={color} margin="0 1rem">
                            {projectsData.name}
                        </H3>
                    </ProjectName>
                </BorderBottom>
            </ProjectBody>
        </>
    );
};
