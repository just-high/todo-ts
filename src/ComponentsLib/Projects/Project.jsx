import React from "react";
import styled from "styled-components";
import {H3} from "../Typography";
import {BorderBottom} from "../../Components/Animation/borderBottom";
import {changeActiveFilterAction} from "../../redux/layoutReducer";
import {useDispatch} from "react-redux";

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
    let color = projectsData.color()
    let dispatch = useDispatch()
    let changeActiveFilter = (ev) => {
        dispatch(changeActiveFilterAction(ev.currentTarget.id))
    }

    return (
        <>
            <ProjectBody onClick={changeActiveFilter} id={projectsData.name}>
                <BorderBottom color={color} margin="0.5rem">
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
