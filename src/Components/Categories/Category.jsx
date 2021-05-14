import React from "react";
import styled from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import {BorderBottom} from "../Animation/borderBottom";
import {changeActiveFilterAndColorAction} from "../../redux/layoutReducer";
import {useDispatch, useSelector} from "react-redux";

const CategoryBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin-top: 3rem;
`;

const CategoryName = styled.div`
  & h3 {
    font-size: 4rem;
  }`;

export const Category = (props) => {
    let dispatch = useDispatch()
    let categoryData = props.data
    let toUpperCaseName = categoryData.name[0].toUpperCase() + categoryData.name.slice(1)
    let changeActiveFilter = (ev) => {
        dispatch(changeActiveFilterAndColorAction(ev.currentTarget.id, categoryData.color))
    }
    console.log(toUpperCaseName)
    let activeFilter = useSelector(state => state.layout.activeFilter)
    return (
        <>
            <CategoryBody onClick={changeActiveFilter} id={categoryData.name}>
                <BorderBottom active={activeFilter===categoryData.name} color={categoryData.color} margin="1rem">
                    <CategoryName>
                        <H3 color={categoryData.color} margin="0 1rem">
                            {toUpperCaseName}
                        </H3>
                    </CategoryName>
                </BorderBottom>
                <AccessAlarmIcon style={{color: categoryData.color}}/>
            </CategoryBody>
        </>
    );
};
