import React, {FC} from 'react';
import styled from "styled-components";
import {colors} from "../../GlobalStuff";

const CheckboxWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;`

const CheckboxRounded = styled.div`
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid ${colors.primary};
`
const CheckboxRoundedFill = styled.div`
  background: green;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%`


export const Checkbox: FC = () => {
    return <CheckboxWrapper>
        <CheckboxRounded>
            <CheckboxRoundedFill>

            </CheckboxRoundedFill>
        </CheckboxRounded>
    </CheckboxWrapper>
};

export default Checkbox;
