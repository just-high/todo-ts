import React from "react";
import styled from "styled-components";
import {H3} from "../Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import {BorderBottom} from "../../Components/Animation/borderBottom";
import {changeActiveFilterAction} from "../../redux/layoutReducer";
import {useDispatch} from "react-redux";

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
        dispatch(changeActiveFilterAction(ev.currentTarget.id))
        console.log(ev.currentTarget.id)
    }
    return (
        <>
            <CategoryBody onClick={changeActiveFilter} id={categoryData.name}>
                <BorderBottom color={categoryData.color} margin="1rem">
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
