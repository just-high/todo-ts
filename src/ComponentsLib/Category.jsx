import React from "react";
import styled, { css } from "styled-components";
import { H1, H2, H3, H4, H5, H6, P } from "./Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { colors } from "../GlobalStuff";

const CategoryWrapper = styled.div``;
const CategoryBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;

const CategoryName = styled.div``;

export const Category = () => {
  return (
    <>
      <CategoryBody>
        <AccessAlarmIcon style={{ color: colors.tertiary }} />
        <CategoryName>
          <H3 color={colors.tertiary} margin="0 1rem">
            Today
          </H3>
        </CategoryName>
      </CategoryBody>
    </>
  );
};
