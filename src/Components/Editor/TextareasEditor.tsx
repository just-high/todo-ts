import React, {FC, FormEvent} from "react";
import {InputTextarea} from "../AtomComponents/InputTextarea";
import {BODY_CHANGE, TITLE_CHANGE} from "../../redux/editorSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import styled from "styled-components";

const TextareaBlock = styled.div`
  display: flex;
  flex-direction: column`

interface  ITextEditor{
    value: string
    onChange: (ev:React.ChangeEvent<HTMLTextAreaElement>)=> void
}
const BodyEditor: FC<ITextEditor> = () => {
    let body = useAppSelector(state => state.editor.body)
    let dispatch = useAppDispatch()
    let onTyping =(ev:FormEvent<HTMLTextAreaElement>)=> {
        dispatch(BODY_CHANGE(ev.currentTarget.value))
    }
    return (

        <InputTextarea value={body} lg={true} onChange={onTyping}>
        </InputTextarea>
    );
};

const TitleEditor: FC<ITextEditor> = () => {
    let title = useAppSelector<any>(state => state.editor.title)
    let dispatch = useAppDispatch()
    let onTyping =(ev:FormEvent<HTMLTextAreaElement>)=> {
        dispatch(TITLE_CHANGE(ev.currentTarget.value))
    }
    return (
        <InputTextarea value={title} lg={false} onChange={onTyping}>
        </InputTextarea>
    );
};

interface ITextareasEditor {
}

const TextareasEditor: FC<ITextareasEditor> = () => {
    let dispatch = useAppDispatch()
    let bodyChange = (ev:React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(BODY_CHANGE(ev.target.value))
    }
    let titleChange = (ev:React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(TITLE_CHANGE(ev.target.value))
    }
    let editCardTitle = useAppSelector(state=> state.editor.title)
    return (
        <TextareaBlock>
            <TitleEditor
                value={editCardTitle}
                onChange={titleChange}>
            </TitleEditor>
            <BodyEditor
                value={editCardTitle}
                onChange={bodyChange}>
            </BodyEditor>
        </TextareaBlock>
    );
};

export default TextareasEditor;
