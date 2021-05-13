import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedProjectAction} from "../../redux/inputReducer";

const InputSelectProjectWrapper = styled.div`
  & select {
    background: #2c3e50;
  }
`
export const InputSelectProject = () => {

    let dispatch = useDispatch()
    let projectList = useSelector(state => state.projects.projectList)
    let selectedProject = useSelector(state => state.input.newCard.project)
    //?отправляю данные в стейт при изменении и возвращаю назад
    let onChange = (e) => {
        dispatch(setSelectedProjectAction(e.target.value))
    }
    let options = projectList.map(el => <option key={el.name}  value={el.name}>{el.name}</option>)
    return (
        <InputSelectProjectWrapper>
            <select name="selectProject" onChange={onChange} value={selectedProject} id="selectProject">
                <option disabled value={"Choose a project"}>Choose a project</option>
                {options}
            </select>
        </InputSelectProjectWrapper>
    )
}