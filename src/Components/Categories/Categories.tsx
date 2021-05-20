import React from "react";
import styled from "styled-components";
import Category from "./Category";
import {useAppSelector} from "../../hooks";


const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`
export const Categories = () => {
    let categoriesData = useAppSelector(state => state.categories)
    let categoriesItem = categoriesData.map(el => <Category data={el}/>)
    return (
        <CategoriesWrapper>
            {categoriesItem}
        </CategoriesWrapper>
    )
}