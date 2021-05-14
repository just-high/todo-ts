import {createGlobalStyle} from "styled-components";
import breakpointsMaxWidth from "./ComponentsLib/breakpoints";
export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus, :active {
    outline: none;
  }

  a:focus, a:active {
    outline: none;
  }

  nav, footer, header, aside {
    display: block;
  }

  html, body {
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  } 
  @media only screen and (max-width: ${props => props.breakTablet || breakpointsMaxWidth.tablet}) {
    html {
    }
  }
  @media only screen and (max-width: ${props => props.breakMobileL || breakpointsMaxWidth.mobileL}) {
    html {
    }
  }
  @media only screen and (max-width: ${props => props.breakMobileS || breakpointsMaxWidth.mobileS}) {
    html {
    }
  }
`

export const colors = {
    primary: "rgba(242, 122, 84, 1)",
    secondary:"rgba(161, 84, 242, 1)",
    tertiary:"rgba(111, 207, 151, 1)",
    darkV: "rgba(42, 48, 54, 1)",
    dark: "rgba(48, 54, 61, 1)",
    grey1: "rgba(60, 68, 76, 1)",
    grey2:"rgba(116, 125, 136, 1)",
    grey3:"rgba(203, 207, 212, 1)",
    white: "rgba(255, 255, 255, 1)",
    whiteMint: "rgba(181, 255, 212, 1)",
}

export const getToUpperCase = (text) => {
    return text[0].toUpperCase() + text.slice(1)
}