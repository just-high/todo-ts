import styled from "styled-components";
import React, {FC, FormEvent} from "react";
import {colors} from "../../GlobalStuff";


const InputTextTaskWrapper = styled.div`
  & textarea:focus + label, textarea:not(:placeholder-shown) + label {
    color: transparent;
  }
`


const InputTextareaItem = styled.textarea<InputTextareaProps>`
  width: 45rem;
  height: ${props => props.lg ? "8.5rem" : "4.5rem"}
  border: 1px solid ${colors.grey1};
  font-family: Montserrat, serif;
  font-size: 3rem;
  background: ${colors.dark};
  resize: none;`
const Label = styled.label`
  font-size: 2rem;
  position: relative;
  left: -80%;
  top: -20%
`
interface InputTextareaProps {
    value: string
    lg?:boolean
    onChange: (ev: FormEvent<HTMLTextAreaElement>) =>void
    onKeyPress?: (ev: React.KeyboardEvent<HTMLTextAreaElement>)=>void
    onKeyUp?: (ev: React.KeyboardEvent<HTMLTextAreaElement>)=>void
}
export const InputTextarea: FC<InputTextareaProps> = (props) => {
    return (
        <InputTextTaskWrapper>
            <InputTextareaItem
                lg={props.lg}
                value={props.value}
                onChange={props.onChange}
            onKeyPress={props.onKeyPress}
                onKeyUp={props.onKeyUp}
                placeholder=' '>

            </InputTextareaItem>
            <Label> {props.children}</Label>
        </InputTextTaskWrapper>
    );
};