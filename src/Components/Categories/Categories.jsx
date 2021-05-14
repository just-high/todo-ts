import React from "react";
import styled from "styled-components";
import {Category} from "./Category";


const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`
export const Categories = (props) => {
    let categoriesItem = props.data.map(el=> <Category data={el}/>)
    return(
        <CategoriesWrapper>
            {categoriesItem}
        </CategoriesWrapper>
    )
}