import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {useAppDispatch} from "../../hooks";
import {TOGGLE_EDITOR} from "../../redux/layoutSlice";

interface IBlure {
    visible: boolean
    onClick?: ()=>void
}
const BlureCore = styled.div<IBlure>`
  width: 0;
  height: 0;
  backdrop-filter: blur(0px) opacity(0);
  transition: backdrop-filter 0.2s linear;
    ${props=>props.visible && css`
      display: block;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
      position: absolute;
      
      transition: backdrop-filter 0.3s;
      
      backdrop-filter:blur(5px)opacity(1);
      z-index: 9999;`}
`
const Blure: FC<IBlure> = ({visible}) => {
    let dispatch = useAppDispatch()
    let closeEditor = () => {
        dispatch(TOGGLE_EDITOR())
    }
    return (
        <BlureCore visible={visible} onClick={closeEditor}>
        </BlureCore>
    );
};

export default Blure;