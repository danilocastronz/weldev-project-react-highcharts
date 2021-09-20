import { FC } from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const Container: FC = ({ children }) => <ChartContainer variant="outlined">{children}</ChartContainer>;

const ChartContainer = styled(Paper)`
  /* layout */
  width: 90%;
  /* style */
  box-shadow: ${(props) =>
    props.theme.palette.mode === 'light' ? '0 0 6px rgba(5, 105, 236, 0.5)' : '0 0 80px rgba(5, 105, 236, 0.5)'};
`;
