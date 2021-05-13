import styled from "styled-components";

export const BorderBottom = styled.div`
  &:after {
    margin: ${props => props.margin};
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: ${props => props.color};
    transition: width 0.1s;
  }

  &:hover:after {
    width: 100%;
  }`