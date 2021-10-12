import { useState } from 'react';
import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import { Color, ColorPicker, createColor } from 'material-ui-color';

import { MetadataOption, MetadataOptionType, MetadataOptionValue } from '../../../types/Metadata';

interface FieldProps {
  customization: MetadataOption;
}

export const Field = ({ customization }: FieldProps) => {
  const [color, setColor] = useState<Color | null>(
    customization.type === MetadataOptionType.ColorPicker ? createColor(customization.value as string) : null,
  );

  const handleChange = (newValue: Color) => {
    setColor(newValue);
  };

  const handleCheckbox = () => {
    console.log('awesome');
  };

  switch (customization.type) {
    case MetadataOptionType.Text:
      return <TextField size="small" value={customization.value} />;
    case MetadataOptionType.Select:
      return (
        <Select
          color="primary"
          value={customization.value && (customization.value as MetadataOptionValue[]).find((e) => e.isDefault)?.id}
        >
          {(customization.value as MetadataOptionValue[]).map((value: MetadataOptionValue) => (
            <MenuItem key={value.id} value={value.id}>
              {value.title}
            </MenuItem>
          ))}
        </Select>
      );
    case MetadataOptionType.Number:
      return <TextField {...customization} />;
    case MetadataOptionType.Checkbox:
      return <Checkbox checked={customization.value ? true : false} onChange={handleCheckbox} />;
    case MetadataOptionType.ColorPicker:
      return <ColorPicker value={color?.value} onChange={handleChange} />;
    case MetadataOptionType.ColorPickerList:
      // TODO: handle color picker list
      return null;
    default:
      return null;
  }
};
