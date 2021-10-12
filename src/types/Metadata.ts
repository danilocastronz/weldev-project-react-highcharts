export interface MetadataOptionColor {
  id: number;
  value: string;
}
export interface MetadataOptionValue {
  id: number;
  title: string;
  isDefault?: boolean;
}

export enum MetadataOptionType {
  Select = 'select',
  Text = 'text',
  Number = 'number',
  Checkbox = 'checkbox',
  ColorPicker = 'color-picker',
  ColorPickerList = 'color-picker-list',
  Chart = 'chart',
}

export interface MetadataOption {
  title: string;
  type: MetadataOptionType;
  value?: string | number | boolean | MetadataOptionValue[] | MetadataOptionColor[];
  readonly?: boolean;
}

export enum MetadataType {
  Axes = 'axes',
  Legend = 'legend',
  Tooltip = 'tooltip',
  ColorTheme = 'colorTheme',
  ChartType = 'chartType',
}

export interface Metadata {
  id: string;
  type: MetadataType;
  title: string;
  description: string;
  enabled: boolean;
  customizations?: MetadataOption[];
}
