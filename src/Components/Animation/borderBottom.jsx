import styled, {css} from "styled-components";

const BottomAndTop = styled.div`
  &:before {
    margin: ${props => props.margin};
    content: '';
    display: block;
    height: 2px;
    left: -4%;
    top: 0.5rem;
    width: 0;
    position: relative;
    background: transparent;
    transition: width 0.15s ;
    ${props => props.active && css`
      width: 108%;
      background: ${props => props.color};
    `}
  }
  &:hover:before {
    width: 108%;
    background: ${props => props.color};
  }
  &:after {
    margin: ${props => props.margin};
    content: '';
    display: block;
    left: -4%;
    height: 2px;
    width: 0;
    position: relative;
    background: transparent;
    transition: width 0.05s;
    ${props => props.active && css`
      width: 108%;
      background: ${props => props.color};
    `}
  }
  &:hover:after {
    width: 108%;
    background: ${props => props.color};
  }
`


export const BorderBottom = (props) => {
    return (
        <BottomAndTop {...props}>
                {props.children}
        </BottomAndTop>
    )
}
