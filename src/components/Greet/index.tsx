import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const Greet = () => {
  const { t } = useTranslation();
  return <Typography variant="h4">{t('greet.text')}</Typography>;
};
