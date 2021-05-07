import styled from "styled-components";
import breakpointsMaxWidth from "./breakpoints";
import {useSelector} from "react-redux";

let size = 1

export const GridCore = styled.div`
  //height, gtc,gtr,columnGap, rowGap
  display: grid;
  height: ${props => props.heightDef};
  grid-template-columns: ${props => props.gtcDef || `1fr repeat(12, minmax(auto, 9.6rem)) 1fr`};
  //gtc=>grid-template-columns, gtc=null => 12 column grid with autoMargin
  column-gap: ${props=>props.colGapDef||"2.4rem"};
  row-gap: ${props=>props.rowGapDef};
  grid-template-rows: ${props => props.gtrDef || "max-content"};
  background: ${props => props.bgDef};
  margin: ${props=>props.margin};
  // @media only screen and (max-width: ${breakpointsMaxWidth.laptop}) {
  //   grid-template-columns: ${props => props.gtcLap || `1fr repeat(12, minmax(auto, 6.8rem)) 1fr`};
  //   column-gap: ${props => props.gtcLap ||"17rem"};
  // }
`
//!!
export const GridFullWidthSection = styled(GridCore)`
  grid-column: ${props => props.gcDef || "1/span 14"};
  grid-template-columns: 1fr repeat(12, minmax(auto, 9.6rem)) 1fr;
  background: ${props => props.bgDef};
  // @media only screen and (max-width: ${breakpointsMaxWidth.laptop}) {
  //   grid-template-columns: ${props => props.gtcLap || `1fr repeat(12, minmax(auto, 6.8rem)) 1fr`};
  // }
`
//
export const GridContent = styled(GridCore)`
  grid-column: 1/span 12;
  grid-template-columns: ${props => props.gtcDef || "repeat(12, minmax(auto, 9.6rem))"};
  background: ${props => props.bgDef};
  width: ${props => props.width};
  height: ${props=>props.height};
  // @media only screen and (max-width: ${breakpointsMaxWidth.laptop}) {
  //   grid-template-columns: ${props => props.gtcLap || `repeat(12, minmax(auto, 6.8rem))`};
  // }
`
//
export const GridCell = styled.div`
  width: ${props => props.width};
  height: ${props => props.heightDef};
  grid-column: ${props => props.gcDef || "auto/auto"};
  background: ${props => props.bgDef};
`

// @media only screen and (max-width: ${props => props.breakTablet || breakpointsMaxWidth.tablet}) {
//     grid-template-columns: ${props => props.gtcTab || "1rem repeat(6, minmax(auto, 1fr)) 1rem"};
//     column-gap: ${props => props.columnGapTab || "1rem"};
// }
