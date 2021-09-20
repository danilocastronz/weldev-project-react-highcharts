export interface FeatureOption {
  title: string;
  type: 'text' | 'select' | 'number' | 'checkbox' | 'color';
  value?: string | number | boolean | string[];
  readonly?: boolean;
}
export interface Feature {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  options?: FeatureOption[];
}
