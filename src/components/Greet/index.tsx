import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export const Greet = () => {
  const { t } = useTranslation();
  return (
    <StyledGreet variant="h4" color="primary">
      {t('greet.text')}
    </StyledGreet>
  );
};

const StyledGreet = styled(Typography)`
  font-family: 'Consolas', cursive;
`;
