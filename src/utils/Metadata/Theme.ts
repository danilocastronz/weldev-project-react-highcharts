import { Metadata, MetadataOptionType, MetadataType } from '../../types/Metadata';

const ThemeMetadata: Metadata = {
  id: 'colorTheme',
  type: MetadataType.ColorTheme,
  title: 'Color Theme',
  enabled: true,
  customizations: [
    {
      title: 'Chart Area',
      value: '#FFF',
      type: MetadataOptionType.ColorPicker,
      readonly: false,
    },
    {
      title: 'Plot Area',
      value: '#FFF',
      type: MetadataOptionType.ColorPicker,
      readonly: false,
    },
    {
      title: 'Color Theme',
      type: MetadataOptionType.ColorPickerList,
      value: [
        {
          id: 1,
          value: '#7cb5ec',
        },
        {
          id: 2,
          value: '#434348',
        },
        {
          id: 3,
          value: '#90ed7d',
        },
        {
          id: 4,
          value: '#f7a35c',
        },
        {
          id: 5,
          value: '#8085e9',
        },
      ],
      readonly: false,
    },
    {
      title: 'Border Color',
      value: '#000',
      type: MetadataOptionType.ColorPicker,
      readonly: false,
    },
    {
      title: 'Border Width',
      value: 1,
      type: MetadataOptionType.Number,
      readonly: false,
    },
  ],
};

export default ThemeMetadata;
