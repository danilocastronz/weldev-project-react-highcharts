import { FC } from 'react';
import styled from '@emotion/styled';
import { Paper } from '@material-ui/core';

export const Container: FC = ({ children }) => (
  <ChartContainer variant="outlined">{children}</ChartContainer>
);

const ChartContainer = styled(Paper)`
  /* size */
  min-height: 250px;
  min-width: 250px;
  /* layout */
  display: flex;
  align-items: center;
  justify-content: center;
  /* style */
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(65, 37, 197, 0.2);
  /* style events */
  :hover {
    transform: scale(1.01);
    transition: transform 0.2s;
  }
`;
