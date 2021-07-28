import { FC } from "react";
import { Paper } from "@material-ui/core";

// Container component
export const Container: FC = ({ children }) => (
  <Paper elevation={3}>{children}</Paper>
);
