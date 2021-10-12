export interface FeatureOptionValueList {
  id: number;
  title: string;
  isDefault?: boolean;
}

export interface FeatureOption {
  title: string;
  type: 'text' | 'select' | 'number' | 'checkbox' | 'color';
  value?: string | number | boolean | FeatureOptionValueList[];
  readonly?: boolean;
}

export enum FeatureType {
  Axes = 'axes',
  Legend = 'legend',
  Tooltip = 'tooltip',
  ColorTheme = 'colorTheme',
  ChartType = 'chartType',
}

export interface Feature {
  id: string;
  type: FeatureType;
  title: string;
  description: string;
  enabled: boolean;
  options?: FeatureOption[];
}
