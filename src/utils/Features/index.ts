import { FeaturesProps } from '../../types/Features';

const Features: FeaturesProps[] = [
  {
    id: 'axes',
    title: 'Axes',
    description: 'Customize Chart Axes',
    enabled: false,
    options: [
      {
        name: 'Title',
        type: 'text',
        readonly: false,
      },
      {
        name: 'Opposite side of chart',
        type: 'checkbox',
        readonly: false,
      },
      {
        name: 'Reversed Direction',
        type: 'checkbox',
        readonly: false,
      },
      {
        name: 'Label Format',
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
        name: 'Enable Legend',
        value: true,
        type: 'checkbox',
        readonly: false,
      },
      {
        name: 'Layout',
        value: ['horizontal', 'vertical'],
        type: 'select',
        readonly: false,
      },
      {
        name: 'Horizontal Alignment',
        value: ['left', 'center', 'right'],
        type: 'select',
        readonly: false,
      },
      {
        name: 'Vertical Alignment',
        value: ['bottom', 'middle', 'top'],
        type: 'select',
        readonly: false,
      },
      {
        name: 'Box Color',
        value: '#000',
        type: 'color',
        readonly: false,
      },
    ],
  },
  {
    id: 'color',
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
];

export default Features;
