import React, {FC} from "react";
import styled, {css} from "styled-components";
import {H3} from "../../ComponentsLib/Typography";
import {colors} from "../../GlobalStuff";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks";
import {SELECT_PRIORITY} from "../../redux/inputSlice";

interface IPriorityButton{
    id?:  string
    active?: boolean
}
const ButtonCore = styled.button<IPriorityButton>`
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


export const PriorityButton: FC<IPriorityButton> = ({id}) => {
    let dispatch = useDispatch()
    let selected = useAppSelector(state => state.input.priority)
    let selectPriority = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(SELECT_PRIORITY(e.currentTarget.id))
    }
    return <ButtonCore id={id} onClick={selectPriority} active={selected === id}>
        <div>
            <span></span>
            <H3>{id}</H3>
        </div>
    </ButtonCore>
}