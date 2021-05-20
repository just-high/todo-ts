import {FC, FormEvent} from "react";
import {InputTextarea} from "../AtomComponents/InputTextarea";
import {getToUpperCase} from "../../GlobalStuff";
import {TITLE_CHANGE} from "../../redux/editorSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
const TitleEditor: FC = () => {
    let title = useAppSelector<any>(state => state.editor.title)
    let dispatch = useAppDispatch()
    let onTyping =(ev:FormEvent<HTMLTextAreaElement>)=> {
        dispatch(TITLE_CHANGE(ev.currentTarget.value))
    }
    return (
        <InputTextarea value={getToUpperCase(title)} lg={false} onChange={onTyping}>
          dadada
        </InputTextarea>
    );
};

export default TitleEditor;
