import React, {FC} from 'react';
import styled from "styled-components";
import {WhatshotTwoTone} from "@material-ui/icons";


const IconBox = styled.div<any>`
  margin: 1rem;
  font-size: 4rem;
  transform: scale(2);
  
`
const IconPriority: FC = () => {
    return (
        <IconBox selected={true} id="high"
                 onClick={()=>{
                     console.log(1)}}><WhatshotTwoTone
            style={{color:" red"}}/></IconBox>
    );
};

export default IconPriority;