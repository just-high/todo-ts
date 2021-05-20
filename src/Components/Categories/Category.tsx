import React, {FC} from 'react';
import styled from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import {BorderBottom} from "../Animation/borderBottom";
import {ICategoryItem} from "../../redux/categoriesSlice";
import {CHANGE_ACTIVE_COLOR, CHANGE_ACTIVE_FILTER} from "../../redux/layoutSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";


interface ICategory {
    data: ICategoryItem
}

interface ICategoryBody {
    onClick: (ev: React.MouseEvent<HTMLDivElement>) => void
    id: string
}

const CategoryBody = styled.div<ICategoryBody>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin-top: 3rem;
`
const CategoryName = styled(H3)`
  font-size: 4rem;
  margin: 0 1rem;
`
const Category: FC<ICategory> = ({data}) => {
    let dispatch = useAppDispatch()
    let changeActiveFilter = (ev: React.MouseEvent<HTMLDivElement>) => {
        dispatch(CHANGE_ACTIVE_FILTER(ev.currentTarget.id))
        dispatch(CHANGE_ACTIVE_COLOR(data.color))
    }
    let toUpperCaseName = data.name[0].toUpperCase() + data.name.slice(1)
    let activeFilter = useAppSelector(state => state.layout.activeFilter)
    return (
        <CategoryBody onClick={changeActiveFilter} id={data.name}>
            <BorderBottom active={activeFilter === data.name} color={data.color} margin="1rem">
                <CategoryName color={data.color}>
                        {toUpperCaseName}
                </CategoryName>
            </BorderBottom>
            <AccessAlarmIcon style={{color: data.color}}/>
        </CategoryBody>
    );
};

export default Category;
// const CategoryBody = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: max-content;
//   margin-top: 3rem;
// `;
//
// const CategoryName = styled.div`
//   & h3 {
//     font-size: 4rem;
//   }`;
//
// export const Category = (props) => {
//     let dispatch = useDispatch()
//     let categoryData = props.data
//     let toUpperCaseName = categoryData.name[0].toUpperCase() + categoryData.name.slice(1)
//     let changeActiveFilter = (ev) => {
//         // dispatch(changeActiveFilterAndColorAction(ev.currentTarget.id, categoryData.color))
//     }
//     console.log(toUpperCaseName)
//     let activeFilter = useSelector(state => state.layout.activeFilter)
//     return (
//         <>
//             <CategoryBody onClick={changeActiveFilter} id={categoryData.name}>
//                 <BorderBottom active={activeFilter===categoryData.name} color={categoryData.color} margin="1rem">
//                     <CategoryName>
//                         <H3 color={categoryData.color} margin="0 1rem">
//                             {toUpperCaseName}
//                         </H3>
//                     </CategoryName>
//                 </BorderBottom>
//                 <AccessAlarmIcon style={{color: categoryData.color}}/>
//             </CategoryBody>
//         </>
//     );
// };
