import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {colors} from "../../GlobalStuff";
import {TYPING_TASK, TITLE_CREATOR} from "../../redux/inputSlice"
import {ADD_NEW_CARD} from "../../redux/cardsSlice";
import {InputTextarea} from "../AtomComponents/InputTextarea";
import React, {FC} from "react";
import {useAppSelector} from "../../hooks";

export const InputTask: FC = () => {
    let dispatch = useDispatch()
    let newCard = useAppSelector(state => state.input)
    let onEnter = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            if (newCard.body === '') {
                debugger
                alert('заполните поле')
            } else {
                dispatch(ADD_NEW_CARD(newCard))
                dispatch(TYPING_TASK(''))
            }
            console.log(newCard.title)
        }
    }
    let onPressEnter = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if (ev.key === 'Enter') {
            ev.preventDefault();
            if (newCard.body === '') {
                return
            } else {
                dispatch(TITLE_CREATOR(newCard.body))

            }
        }
    }
    let onChange = (ev: React.FormEvent<HTMLTextAreaElement>) => {
        dispatch(TYPING_TASK(ev.currentTarget.value))
    }
    return (
        <InputTextarea onKeyPress={onPressEnter} onKeyUp={onEnter} onChange={onChange}
                       value={newCard.body}>
            Your task
        </InputTextarea>
    )
}
