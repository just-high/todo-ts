import React, {FC} from 'react';
import styled from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import {BorderBottom} from "../Animation/borderBottom";
import {useDispatch, useSelector} from "react-redux";
import {IProjectsItem} from "../../redux/projectsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {CHANGE_ACTIVE_COLOR, CHANGE_ACTIVE_FILTER} from "../../redux/layoutSlice";

interface IProjectBody {
    onClick: (ev: React.MouseEvent<HTMLDivElement>) => void
    id: string
}

const ProjectBody = styled.div<IProjectBody>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin-top: 1rem;
`;

interface IProject {
    data: IProjectsItem
}

const ProjectName = styled(H3)`
  font-size: 2rem;
  letter-spacing: 0.3rem;
  margin: 0 1rem;
`;
const Project: FC<IProject> = ({data}) => {
    let dispatch = useAppDispatch()
    let changeActiveFilter = (ev: React.MouseEvent<HTMLDivElement>) => {
        dispatch(CHANGE_ACTIVE_FILTER(ev.currentTarget.id))
        dispatch(CHANGE_ACTIVE_COLOR(data.color))
    }
    let activeFilter = useAppSelector(state => state.layout.activeFilter)
    return (
        <ProjectBody onClick={changeActiveFilter} id={data.name}>
            <BorderBottom active={activeFilter === data.name} color={data.color} margin="0.5rem">
                <ProjectName color={data.color}>
                    {data.name}

                </ProjectName>
            </BorderBottom>

        </ProjectBody>
    );
};

export default Project;


// const ProjectBody = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: max-content;
//   margin-top: 1rem;
// `;
//
// const ProjectName = styled.div`
//   & h3 {
//     font-size: 2rem;
//     letter-spacing: 0.3rem;
//   }`;
//
// export const Project = (props) => {
//     let projectsData = props.data
//     let color = projectsData.color
//     console.log(projectsData)
//     let dispatch = useDispatch()
//     let changeActiveFilter = (ev) => {
//         // dispatch(changeActiveFilterAndColorAction(ev.currentTarget.id, color))
//     }
//     let activeFilter = useSelector(state => state.layout.activeFilter)
//     return (
//         <>
//             <ProjectBody onClick={changeActiveFilter} id={projectsData.name}>
//                 <BorderBottom active={activeFilter===projectsData.name} color={color} margin="0.5rem">
//                     <ProjectName>
//                         <H3 color={color} margin="0 1rem">
//                             {projectsData.name}
//                         </H3>
//                     </ProjectName>
//                 </BorderBottom>
//             </ProjectBody>
//         </>
//     );
// };
