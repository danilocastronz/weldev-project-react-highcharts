import { useContext } from 'react';
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

import { Metadata, MetadataOptionType } from '../../../types/Metadata';
import { AppContext, IAppStore } from '../../../contexts/AppContext';

interface MenuOptionsDialogProps {
  metadata: Metadata | null;
  open: boolean;
  onClose: () => void;
}

export const MenuOptionsDialog = ({ metadata, open, onClose }: MenuOptionsDialogProps) => {
  const appContext = useContext(AppContext);
  const { t } = useTranslation();

  const handleClose = () => {
    onClose();
  };

  const handleApply = () => {
    appContext.applyChartTitleAndSubtitle('PD Shine', 'by Danilo Castro');
  };

  return (
    metadata && (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{`Customize ${metadata.title}`.toLocaleUpperCase()}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Set the following values to customize your chart ${metadata.title.toLocaleLowerCase()}.`}
          </DialogContentText>
          <Box
            sx={{
              p: 1,
              display: metadata.customizations?.every((e) => e.type === MetadataOptionType.Chart) ? 'flex' : 'default',
              justifyContent: metadata.customizations?.every((e) => e.type === MetadataOptionType.Chart)
                ? 'center'
                : 'left',
            }}
          >
            {metadata.customizations &&
              metadata.customizations.map((option, index) => (
                <Box
                  key={`${index}-${option.title}`}
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: option.type === MetadataOptionType.Chart ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {option.type !== MetadataOptionType.Chart && <Typography variant="body1">{option.title}</Typography>}
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
