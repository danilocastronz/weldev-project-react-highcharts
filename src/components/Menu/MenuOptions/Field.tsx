import { useState } from 'react';
import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import { Color, ColorPicker, createColor } from 'material-ui-color';

import { FeatureOption, FeatureOptionValueList } from '../../../types/Features';

interface FieldProps {
  option: FeatureOption;
}

export const Field = ({ option }: FieldProps) => {
  const [color, setColor] = useState(createColor('#F1F1F1'));

  const handleChange = (newValue: Color) => {
    setColor(newValue);
  };

  const handleCheckbox = () => {
    console.log('awesome');
  };

  switch (option.type) {
    case 'text':
      return <TextField {...option} />;
    case 'select':
      return (
        <Select value={option.value && (option.value as FeatureOptionValueList[]).find((e) => e.isDefault)?.id}>
          {(option.value as FeatureOptionValueList[]).map((value: FeatureOptionValueList) => (
            <MenuItem key={value.id} value={value.id}>
              {value.title}
            </MenuItem>
          ))}
        </Select>
      );
    case 'number':
      return <TextField {...option} />;
    case 'checkbox':
      return <Checkbox checked={option.value ? true : false} onChange={handleCheckbox} />;
    case 'color':
      return <ColorPicker value={color} onChange={handleChange} />;
    default:
      return null;
  }
};
