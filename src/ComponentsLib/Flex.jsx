import React from 'react';
import styled from "styled-components";

const FlexCore = styled.div`
  display: flex;
  flex-direction: ${({flexDirection})=>flexDirection};
  justify-content: ${props => props.justifyContent };
  justify-items: ${props => props.justifyItems};
  justify-self: ${props => props.self};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  height: ${props => props.height};
  width: ${props => props.width};
  flex-grow: ${props => props.fGrow};
  flex-direction: ${props => props.flexDirection};
`

export const Flex = (props) => {
    return <FlexCore {...props}>{props.children}</FlexCore>
}
