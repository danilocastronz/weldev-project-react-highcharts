import { FC } from "react";
import { Paper } from "@material-ui/core";
import styled from "@emotion/styled";

const ChartContainer = styled(Paper)``;

export const Container: FC = ({ children }) => (
  <ChartContainer elevation={3}>{children}</ChartContainer>
);
