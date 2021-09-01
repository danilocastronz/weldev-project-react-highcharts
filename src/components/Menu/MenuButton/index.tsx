import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';

interface MenuButtonProps {
  label: string;
}

export const MenuButton = ({ label }: MenuButtonProps) => (
  <StyledButton variant="contained" color="primary">
    {label}
  </StyledButton>
);

const StyledButton = styled(Button)`
  min-width: 150px;
`;
