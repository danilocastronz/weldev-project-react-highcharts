import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';

interface MenuButtonProps {
  label: string;
}

export const MenuButton = ({ label }: MenuButtonProps) => (
  <StyledButton variant="outlined" color="primary">
    {label}
  </StyledButton>
);

const StyledButton = styled(Button)`
  min-width: 150px;
  box-shadow: 0px 2px 4px -1px rgba(5, 105, 236, 0.5);
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 6px rgba(5, 105, 236, 0.5);
  }
`;
