import { Feature, FeatureType } from '../types/Features';

const Features: Feature[] = [
  {
    id: 'axis',
    type: FeatureType.Axes,
    title: 'Axes',
    description: 'Customize Chart Axes',
    enabled: false,
    options: [
      {
        title: 'Title',
        type: 'text',
        readonly: false,
      },
      {
        title: 'Opposite side of chart',
        type: 'checkbox',
        readonly: false,
      },
      {
        title: 'Reversed Direction',
        type: 'checkbox',
        readonly: false,
      },
      {
        title: 'Label Format',
        type: 'text',
        value: '{value}',
        readonly: false,
      },
    ],
  },
  {
    id: 'legend',
    type: FeatureType.Legend,
    title: 'Legend',
    description: 'Customize Chart Legend',
    enabled: true,
    options: [
      {
        title: 'Show Legend',
        value: true,
        type: 'checkbox',
        readonly: false,
      },
      {
        title: 'Layout',
        value: [
          {
            id: 1,
            title: 'Horizontal',
            isDefault: true,
          },
          {
            id: 2,
            title: 'Vertical',
          },
        ],
        type: 'select',
        readonly: false,
      },
      {
        title: 'Horizontal Alignment',
        value: [
          {
            id: 1,
            title: 'Left',
          },
          {
            id: 2,
            title: 'Center',
            isDefault: true,
          },
          {
            id: 3,
            title: 'Right',
          },
        ],
        type: 'select',
        readonly: false,
      },
      {
        title: 'Vertical Alignment',
        value: [
          {
            id: 1,
            title: 'Top',
          },
          {
            id: 2,
            title: 'Middle',
          },
          {
            id: 3,
            title: 'Bottom',
            isDefault: true,
          },
        ],
        type: 'select',
        readonly: false,
      },
      {
        title: 'Box Color',
        value: '#000',
        type: 'color',
        readonly: false,
      },
    ],
  },
  {
    id: 'colorTheme',
    type: FeatureType.ColorTheme,
    title: 'Color Theme',
    description: 'Customize Chart Color Theme',
    enabled: false,
  },
  {
    id: 'tooltip',
    type: FeatureType.Tooltip,
    title: 'Tooltip',
    description: 'Customize Series Tooltip',
    enabled: false,
  },
  {
    id: 'chartType',
    type: FeatureType.ChartType,
    title: 'Chart Type',
    description: 'Choose Chart Type',
    enabled: false,
  },
];

export default Features;
