import React from 'react';
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  justify-items: ${props => props.justifyItems||"center"};
  justify-self: ${props=>props.self||"center"};
  align-content: ${props => props.alignContent || "center"};
  align-items: ${props=>props.alignItems|| "center"};
  align-self: ${props=>props.alignSelf||"center"};
`