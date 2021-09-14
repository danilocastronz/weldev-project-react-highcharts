import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Translation } from '../Translation';

export const Greet = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h4">{t('greet.text')}</Typography>
      <Translation />
    </>
  );
};
