import React, {FC} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {PROJECT_CHANGE} from "../../redux/editorSlice";

const SelectProjectWrapper = styled.div`
`
const ProjectSelectorEditor: FC = () => {
    let dispatch = useAppDispatch()
    let projectList = useAppSelector(state => state.projects)
    let selectedProject = useAppSelector(state => state.editor.project)
    let options = projectList.map(el => <option key={el.name} value={el.name}>{el.name}</option>)
    let projectChange = (ev:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(PROJECT_CHANGE(ev.currentTarget.value))
    }
    return (
        <SelectProjectWrapper>
            <select name="selectProject" value={selectedProject} onChange={projectChange} id="selectProject">
                <option disabled value={"Choose a project"}>Choose a project</option>
                {options}
            </select>
        </SelectProjectWrapper>
    );
};

export default ProjectSelectorEditor;