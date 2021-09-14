import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContent variant="body2" color="textSecondary" align="center">
      {t('footer.text')}
    </FooterContent>
  );
};

const FooterContent = styled(Typography)`
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
