import { Dialog, DialogTitle } from '@mui/material';

import { Field } from './Field';

import { Feature } from '../../../types/Features';

interface MenuOptionsProps {
  feature: Feature | null;
  open: boolean;
  onClose: () => void;
}

export const MenuOptions = ({ feature, open, onClose }: MenuOptionsProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    feature && (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{feature.title}</DialogTitle>
        {feature.options &&
          feature.options.map((option, index) => <Field key={`${index}-${option.title}`} option={option} />)}
      </Dialog>
    )
  );
};
