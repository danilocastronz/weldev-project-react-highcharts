export interface FeaturesProps {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  options?: {
    name: string;
    type: 'text' | 'select' | 'number' | 'checkbox' | 'color';
    value?: string | number | boolean | string[];
    readonly: boolean;
  }[];
}
