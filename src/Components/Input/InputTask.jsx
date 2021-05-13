import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addNewCardAction} from "../../redux/cardsReducer";
import {titleCreatorAction, typingTaskAction} from "../../redux/inputReducer";
import {colors} from "../../GlobalStuff";


const InputTextTaskWrapper = styled.div`
  & textarea {
    width: 45rem;
    height: 8.5rem;
    border: 1px solid ${colors.grey1};
    font-family: Montserrat, serif;
    font-size: 3rem;
    background: ${colors.dark};
    resize: none;
  }

  & label {
    font-size: 2rem;
    position: relative;
    left: -80%;
    top: -20%
  }

  & textarea:focus + label, textarea:not(:placeholder-shown) + label {
    color: transparent;
  }
`
export const InputTask = () => {
    let dispatch = useDispatch()
    let newCard = useSelector(state => state.input.newCard)
    let textInTextarea = newCard.body
    // ! Отправка по нажатию
    let onEnter = (ev) => {
        if (ev.key === 'Enter') {
            dispatch(addNewCardAction(newCard))
            ev.preventDefault();
            dispatch(typingTaskAction(''))
            dispatch(titleCreatorAction())
            console.log(newCard.title)
        }
    }

    let onChange = (ev) => {
        dispatch(typingTaskAction(ev.target.value))
        dispatch(titleCreatorAction())
    }
    return (
        <InputTextTaskWrapper>
            <textarea placeholder=' ' onKeyPress={onEnter} onChange={onChange} value={textInTextarea}></textarea>
            <label>ваша задача</label>

        </InputTextTaskWrapper>
    )
}
