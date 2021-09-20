import { Checkbox, Select, TextField } from '@mui/material';
import { Color, ColorPicker, createColor } from 'material-ui-color';
import { useState } from 'react';
import { FeatureOption } from '../../../types/Features';

interface FieldProps {
  option: FeatureOption;
}

export const Field = ({ option }: FieldProps) => {
  const [color, setColor] = useState(createColor('red'));

  const handleChange = (newValue: Color) => {
    console.log('change', newValue);
    // setColor(`#${newValue.hex}`);
    setColor(newValue);
    // action('changed')(newValue);
  };

  const handleCheckbox = () => {
    console.log('awesome');
  };

  switch (option.type) {
    case 'text':
      return <TextField {...option} />;
    case 'select':
      return <Select {...option} />;
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
