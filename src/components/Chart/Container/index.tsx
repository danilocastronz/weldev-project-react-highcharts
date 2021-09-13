import { FC } from 'react';
import styled from '@emotion/styled';
import Paper from '@material-ui/core/Paper';

export const Container: FC = ({ children }) => <ChartContainer variant="outlined">{children}</ChartContainer>;

const ChartContainer = styled(Paper)`
  /* style */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;
