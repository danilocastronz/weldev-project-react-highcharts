import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Field } from './Field';

import { Metadata } from '../../../types/Metadata';

interface MenuOptionsProps {
  metadata: Metadata | null;
  open: boolean;
  onClose: () => void;
}

export const MenuOptions = ({ metadata, open, onClose }: MenuOptionsProps) => {
  const { t } = useTranslation();

  const handleClose = () => {
    onClose();
  };

  const handleApply = () => {
    alert('apply');
  };

  return (
    metadata && (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{`Chart ${metadata.title}`.toLocaleUpperCase()}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Set the following values to customize your chart ${metadata.title.toLocaleLowerCase()}.`}
          </DialogContentText>
          <Box sx={{ p: 1 }}>
            {metadata.customizations &&
              metadata.customizations.map((option, index) => (
                <Box
                  key={`${index}-${option.title}`}
                  sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography variant="body1">{option.title}</Typography>
                  <Field customization={option} />
                </Box>
              ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="secondary">
            {t('close')}
          </Button>
          <Button variant="outlined" onClick={handleApply}>
            {t('apply')}
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
};
