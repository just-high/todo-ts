import styled from "styled-components";

import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {INPUT_PROJECT_CHANGE} from "../../redux/inputSlice";

const InputSelectProjectWrapper = styled.div`
  & select {
    background: #2c3e50;
  }
`
export const InputSelectProject: FC = () => {

    let dispatch = useAppDispatch()
    let projectList = useAppSelector(state => state.projects)
    let selectedProject = useAppSelector(state => state.input.project)
    let selectProject = (e: React.FormEvent<HTMLSelectElement>) => {
      dispatch(INPUT_PROJECT_CHANGE(e.currentTarget.value))
    }
    let options = projectList.map(el => <option key={el.name}  value={el.name}>{el.name}</option>)
    return (
        <InputSelectProjectWrapper>
            <select name="selectProject" onChange={selectProject} value={selectedProject} id="selectProject">
                <option disabled value={"Choose a project"}>Choose a project</option>
                {options}
            </select>
        </InputSelectProjectWrapper>
    )
}