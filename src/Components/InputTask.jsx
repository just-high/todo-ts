import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

const InputTaskWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 2rem;
  position: relative;
  width: 20vw;


  & textarea {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    font-size: 1.8rem;
    border: 1px solid;
    border-color: transparent transparent gray;
    background-color: transparent;
    transform: translateY(0rem);
    resize: none;
    width: 20vw;
    height: 3vh;
    transition: all 0.3s;
  }

  & textarea:focus {
    outline: none;
    height: 14vh;
    transition: all 0.3s;
  }


  & textarea:focus + label, textarea:valid + label {
    position: relative;
    top: 1vh;
    left: 1vw;
    font-size: 1.2rem;
    color: red;


    z-index: 1;
    transition: all 1s;
  }

  & textarea:focus ~ .bar, textarea:valid ~ .bar {
    transform: scaleX(1.0);
    transition: all 0.3s;
  }
`
const Bar = styled.div`
  width: 100%;
  height: 3px;
  position: relative;
  background-color: rgb(148, 98, 255);
  top: -2vh;
  left: 0;
  transform: scaleX(0.0);
  transition: all 0.3s;
`
const Textarea = styled.textarea`
  &:focus {
  }

  &:valid ~ .bar, :focus ~ .bar {
    transform: scaleX(1.0);
    transition: all 0.3s;
  }
`
const Label = styled.label`
  position: relative;
  font-size: 1.8rem;
  color: rgb(165, 165, 165);
  top: -3vh;
  left: 1vw;
  z-index: 1;
  pointer-events: none;
  transition: all 0.3s;
`
const Highlight = styled.div`
  width: 100%;
  height: 85%;
  position: absolute;
  background-color: rgba(148, 98, 255, 0.2);
  top: 15%;
  left: 0;
  visibility: hidden;
  z-index: 1;

  :focus {
    width: 0;
    visibility: visible;
    transition: all 0.09s linear;
  }
`
export const InputTask = (props) => {
    let dispatch= useDispatch()
    let newCard = useSelector(state=>state.input.newCard)
    let onEnter = (ev) => {
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === 'Enter') {
            dispatch({type:"ADD_NEW_CARD",newCard: newCard})
            ev.preventDefault();
        }
    }
    let typingTask = (ev)=>{
        dispatch({type:"TYPING_TASK", text: ev.target.value })
    }
    return (
        <InputTaskWrapper className="input">
            <Textarea type="text" required onChange={typingTask} onKeyPress={onEnter}/>
            <Label>Type your task</Label>
            <Bar className="bar"></Bar>
            <Highlight className="highlight"></Highlight>
        </InputTaskWrapper>
    )
}
