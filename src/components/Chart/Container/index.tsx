import { FC } from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const Container: FC = ({ children }) => <ChartContainer variant="outlined">{children}</ChartContainer>;

const ChartContainer = styled(Paper)`
  /* layout */
  width: 90%;
  /* style */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;
