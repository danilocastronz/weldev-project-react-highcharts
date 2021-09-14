import styled from '@emotion/styled';
import { Button as MuiButton, Tooltip } from '@material-ui/core';

interface StyledButtonProps {
  enabled?: boolean;
}

interface ButtonProps {
  id: string;
  label: string;
  description: string;
  enabled?: boolean;
}

export const Button = ({ id, label, description, enabled = true }: ButtonProps) => (
  <Tooltip
    key={`tooltip-${id}`}
    placement="bottom"
    title={enabled ? description : `${description} - Coming soon, guys!`}
    arrow
  >
    <StyledButton variant="outlined" color="primary">
      {label}
    </StyledButton>
  </Tooltip>
);

const StyledButton = styled(MuiButton)<StyledButtonProps>`
  min-width: 150px;
  box-shadow: 0px 2px 4px -1px rgba(5, 105, 236, 0.5);
  cursor: ${(props) => (props.enabled ? 'pointer' : 'not-allowed')};
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 6px rgba(5, 105, 236, 0.5);
  }
`;
