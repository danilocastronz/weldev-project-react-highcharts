import { Feature } from '../types/Features';

const Features: Feature[] = [
  {
    id: 'axis',
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
    title: 'Legend',
    description: 'Customize Chart Legend',
    enabled: false,
    options: [
      {
        title: 'Enable Legend',
        value: true,
        type: 'checkbox',
        readonly: false,
      },
      {
        title: 'Layout',
        value: ['horizontal', 'vertical'],
        type: 'select',
        readonly: false,
      },
      {
        title: 'Horizontal Alignment',
        value: ['left', 'center', 'right'],
        type: 'select',
        readonly: false,
      },
      {
        title: 'Vertical Alignment',
        value: ['bottom', 'middle', 'top'],
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
    title: 'Color Theme',
    description: 'Customize Chart Color Theme',
    enabled: false,
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    description: 'Customize Series Tooltip',
    enabled: false,
  },
  {
    id: 'chartType',
    title: 'Chart Type',
    description: 'Choose Chart Type',
    enabled: false,
  },
];

export default Features;
