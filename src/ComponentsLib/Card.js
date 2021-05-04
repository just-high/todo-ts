import React from 'react';
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {todayReducer} from "../redux/todayReducer";


const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 3rem minmax(5rem, auto);
  margin: 2rem 0;
  padding: 1rem 0;
  background: red;
`
const CardHeader = styled.div`
  display: flex;
  background: aqua;
`
const Title = styled.div`

`
const Project = styled.div`

`
const Priority = styled.div`

`
export const Card = (props) => {
    const today = useSelector(state => state.today)
    return (
        <CardWrapper>
            <CardHeader>
                <Title>
                    nbnekmybr
                </Title>
                <Project>
                    project
                </Project>
                <Priority>
<
                </Priority>
            </CardHeader>

        </CardWrapper>
    );
};
