import styled from "styled-components";
import breakpointsMaxWidth from "./breakpoints";

export const GridCore = styled.div`
  //height, gtc,gtr,columnGap, rowGap
  display: grid;
  height: ${props => props.heightDef};

  grid-template-columns: ${props => props.gtcDef || "1fr repeat(12, minmax(6.8rem, 6.8rem)) 1fr"};
  //gtc=>grid-template-columns, gtc=null => 12 column grid with autoMargin
  column-gap: ${props => props.columnGapDef || "3rem"};
  row-gap: ${props => props.rowGapDef || "0rem"};
  grid-template-rows: ${props => props.gtrDef || "max-content"};
  background: ${props => props.bgDef};
  @media only screen and (max-width: ${props => props.breakTablet || breakpointsMaxWidth.tablet}) {
    grid-template-columns: ${props => props.gtcTab || "1rem repeat(6, minmax(auto, 1fr)) 1rem"};
    column-gap: ${props => props.columnGapTab || "1rem"};
  }
  @media only screen and (max-width: ${props => props.breakMobileL || breakpointsMaxWidth.mobileL}) {
    grid-template-columns: ${props => props.gtcML || "0.5rem repeat(3, minmax(auto, 1fr)) 0.5rem"};
    column-gap: ${props => props.columnGapML || "0.5rem"};
  }
  @media only screen and (max-width: ${props => props.breakMobileS || breakpointsMaxWidth.mobileS}) {
    grid-template-columns: ${props => props.gtcMS || "0.5rem repeat(1, minmax(auto, 1fr)) 0.5rem"};
  }

`
//!!
export const GridFullWidthSection = styled(GridCore)`
  grid-column: ${props => props.gcDef || "1/span 14"};
  grid-template-columns: 1fr repeat(12, minmax(6.8rem, 6.8rem)) 1fr;
  background: ${props => props.bgDef};
  @media only screen and (max-width: ${props => props.breakTablet || breakpointsMaxWidth.tablet}) {
    grid-column: ${props => props.gcTab || '1/span 8'};
    grid-template-columns: ${props => props.gtcTab || "1rem repeat(6, minmax(auto, 1fr)) 1rem"};
  }
  @media only screen and (max-width: ${props => props.breakMobileL || breakpointsMaxWidth.mobileL}) {
    grid-column: ${props => props.gcML || '1/span 5'};
    grid-template-columns: ${props => props.gtcML || "0.5rem repeat(3, minmax(auto, 1fr)) 0.5rem"};
  }
  @media only screen and (max-width: ${props => props.breakMobileS || breakpointsMaxWidth.mobileS}) {
    grid-column: ${props => props.gcMS || '1/span 3'};
    grid-template-columns: ${props => props.gtcMS || "0.5rem repeat(1, minmax(auto, 1fr)) 0.5rem"};
  }
`
//
export const GridContent = styled(GridCore)`
  grid-column: 2/span 12;
  grid-template-columns: ${props => props.gtcDef || "repeat(12, minmax(6.8rem, 6.8rem))"};
  background: ${props=>props.bgDef};
  @media only screen and (max-width: ${props => props.breakTablet || breakpointsMaxWidth.tablet}) {
    grid-column: ${props => props.gcTab || "2/span 6"};
    grid-template-columns: ${props => props.gtcTab || "repeat(6, minmax(auto, 1fr))"};
  }
  @media only screen and (max-width: ${props => props.breakMobileL || breakpointsMaxWidth.mobileL}) {
    grid-column: ${props => props.gcML || "2/span 3"};
    grid-template-columns: ${props => props.gtcML || "repeat(3, minmax(auto, 1fr))"};
  }
  @media only screen and (max-width: ${props => props.breakMobileS || breakpointsMaxWidth.mobileS}) {
    grid-column: ${props => props.gcMS || "2/span 1"};
    grid-template-columns: ${props => props.gtcMS || "repeat(1, minmax(auto, 1fr))"};
  }
`
//
export const GridCell = styled.div`
  height: ${props => props.heightDef};
  grid-column: ${props => props.gcDef || "auto/auto"};
  background: ${props => props.bgDef};
  @media only screen and (max-width: ${props => props.breakTablet || breakpointsMaxWidth.tablet}) {
    background: ${props => props.colorTab};
    grid-column: ${props => props.gcTab || "auto/auto"};
  }
  @media only screen and (max-width: ${props => props.breakMobileL || breakpointsMaxWidth.mobileL}) {
    background: ${props => props.colorML};
    grid-column: ${props => props.gcML || "auto/auto"};
  }
  @media only screen and (max-width: ${props => props.breakMobileS || breakpointsMaxWidth.mobileS}) {
    background: ${props => props.colorMS};
    grid-column: ${props => props.gcMS || "auto/auto"};
  }

`