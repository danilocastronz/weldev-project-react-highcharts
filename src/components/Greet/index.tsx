import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export const Greet = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="h4" color="primary">
      {t('greet.text')}
    </Typography>
  );
};
