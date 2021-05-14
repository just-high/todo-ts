import React from "react";
import styled, {css} from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import {colors} from "../../GlobalStuff";
import {useDispatch, useSelector} from "react-redux";
import { togglePriorityAction} from "../../redux/inputReducer";


const ButtonCore = styled.button`
  background: ${colors.darkV};
  box-shadow: 0.2rem 0.2rem 0.1rem 0.1rem rgba(34, 60, 80, 0.6);
  transform: scale(1);
  transition: all 0.1s;
}

& > div {
  display: flex;
  align-items: center;
  margin: 0 3rem 0 1rem;
}

& > div > span {
  margin-right: 1rem;
  display: inline-block;
  border-radius: 50%;
  background: antiquewhite;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.42) inset;
  border: 3px solid green;
  width: 2rem;
  height: 2rem;
}

& h3 {
  display: inline-block;
}

:hover {
  box-shadow: 0rem 0rem 0rem 0rem rgba(34, 60, 80, 0.6);
  transform: scale(0.99);
}

& h3:hover {
}

& > div > span:hover {
}

${props => props.active && css`
  background: black`}
`
export const PriorityButton = (props) => {
    let dispatch = useDispatch()
    let selected = useSelector(state => state.input.newCard.priority)
    let selectPriority = (e) => {
        dispatch(togglePriorityAction(e.currentTarget.id))
    }
    return <ButtonCore id={props.children} onClick={selectPriority} active={selected === props.children}>
        <div>
            <span></span>
            <H3>{props.children}</H3>
        </div>
    </ButtonCore>
}