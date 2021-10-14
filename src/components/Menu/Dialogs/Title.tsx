import React, { useContext, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../../contexts/AppContext';

interface TitleMenuDialogProps {
  open: boolean;
  onClose: () => void;
}

export const TitleMenuDialog = ({ open, onClose }: TitleMenuDialogProps) => {
  const appContext = useContext(AppContext);
  const [title, setTitle] = useState(appContext.chartOptions.title?.text);
  const [subTitle, setSubTitle] = useState(appContext.chartOptions.subtitle?.text);

  const { t } = useTranslation();

  const handleClose = () => {
    onClose();
  };

  const handleApply = () => {
    appContext.applyChartTitleAndSubtitle('PD Shine', 'by Danilo Castro');
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Customize Chart Title</DialogTitle>
      <DialogContent>
        <DialogContentText>Set the following values to customize your chart title.</DialogContentText>
        <Box>
          <Box
            key="chart-title"
            sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">Title</Typography>
            <TextField
              required
              size="small"
              defaultValue={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
          </Box>
          <Box
            key="chart-subtitle"
            sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">SubTitle</Typography>
            <TextField
              size="small"
              defaultValue={subTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubTitle(e.target.value)}
            />
          </Box>
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
  );
};
