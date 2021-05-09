import styled, {css} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@material-ui/core";
import {GridCell, GridContent} from "./Grid";
import {colors} from "../GlobalStuff";
import React from "react";

const InputPriorityWrapper = styled.div`
  & input {
    display: none;
  }
`
const LabelWrapper = styled.div`
  & button {
    width: 100%;
    background: #ddd;
    display: flex;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 1s ease;
    box-sizing: border-box;

    ${props => props.active && css`
      background: red;
      border: 2px solid #8e49e8;`}
    &:hover {
      background: #d5bbf7;
    }
  }
`
const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  & .circle {
    height: 22px;
    width: 22px;
    background: #ccc;
    border-radius: 50%;
    margin-right: 15px;
    border: 5px solid transparent;
    display: inline-block;
    box-shadow: inset -4px -4px 10px rgb(0, 0, 0, 0.2);
    transition: all 0.25s ease;
  }


`

export const InputPriority = () => {
    let dispatch = useDispatch()
    let inputPriority = useSelector(state => state.input.newCard.priority)
    let select = (e) => {
        dispatch({type: "SELECT_PRIORITY", priority: e.target.id})
        console.log(e.target.id)
    }
    return (
        <InputPriorityWrapper>
            <input type="radio" name="priority" id="high" checked={inputPriority === "high"}/>
            <input type="radio" name="priority" id="mid" checked={inputPriority === "mid"}/>
            <input type="radio" name="priority" id="low" checked={inputPriority === "low"}/>

            <LabelWrapper active={inputPriority === "high"} id='high' onClick={select}>
                <button id='high'>
                    <ItemWrapper id='high'>
                        <span className="circle" id='high' check></span>
                        <span className="subject" id='high'>Очень Срочно</span>
                    </ItemWrapper>
                </button>
            </LabelWrapper>
            <LabelWrapper active={inputPriority === "mid"} id='mid' onClick={select}>
                <button id='mid'>
                    <ItemWrapper id='mid'>
                        <span className="circle" id='mid'></span>
                        <span className="subject" id='mid'>Срочно</span>
                    </ItemWrapper>
                </button>
            </LabelWrapper>
            <LabelWrapper active={inputPriority === "low"} id='low' onClick={select}>
                <button id='low'>
                    <ItemWrapper id='low'>
                        <span className="circle" id='low'></span>
                        <span className="subject" id='low'>Не срочно</span>
                    </ItemWrapper>
                </button>
            </LabelWrapper>
        </InputPriorityWrapper>

    )
}