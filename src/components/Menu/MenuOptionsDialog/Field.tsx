import { useState } from 'react';
import { Checkbox, MenuItem, Select, TextField, IconButton, Button } from '@mui/material';
import { Color, ColorPicker, createColor } from 'material-ui-color';

import { MetadataOption, MetadataOptionType, MetadataOptionValue } from '../../../types/Metadata';
import {
  AlignHorizontalLeft as BarChartIcon,
  BarChart as ColumnChartIcon,
  ShowChart as LineChartIcon,
  PieChart as PieChartIcon,
  DonutSmall as DonutChartIcon,
} from '@mui/icons-material';

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
          size="small"
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
      return <TextField type="number" size="small" value={customization.value} />;
    case MetadataOptionType.Checkbox:
      return <Checkbox checked={customization.value ? true : false} onChange={handleCheckbox} />;
    case MetadataOptionType.ColorPicker:
      return <ColorPicker value={color?.value} onChange={handleChange} />;
    case MetadataOptionType.Chart:
      switch (customization.title) {
        case 'Bar':
          return (
            <Button variant="contained" startIcon={<BarChartIcon />}>
              {customization.title}
            </Button>
          );
        case 'Column':
          return (
            <Button variant="contained" startIcon={<ColumnChartIcon />}>
              {customization.title}
            </Button>
          );
        case 'Line':
          return (
            <Button variant="contained" startIcon={<LineChartIcon />}>
              {customization.title}
            </Button>
          );
        case 'Pie':
          return (
            <Button variant="contained" startIcon={<PieChartIcon />}>
              {customization.title}
            </Button>
          );
        case 'Donut':
          return (
            <Button variant="contained" startIcon={<DonutChartIcon />}>
              {customization.title}
            </Button>
          );
        default:
          return <div>{customization.title}</div>;
      }
    default:
      return null;
  }
};
