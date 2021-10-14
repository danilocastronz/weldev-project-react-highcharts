import { Metadata, MetadataOptionType, MetadataType } from '../../types/Metadata';

const LegendMetadata: Metadata = {
  id: 'legend',
  type: MetadataType.Legend,
  title: 'Legend',
  enabled: true,
  customizations: [
    {
      title: 'Show Legend',
      value: true,
      type: MetadataOptionType.Checkbox,
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
      type: MetadataOptionType.Select,
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
      type: MetadataOptionType.Select,
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
      type: MetadataOptionType.Select,
      readonly: false,
    },
    {
      title: 'Box Color',
      value: '#000',
      type: MetadataOptionType.ColorPicker,
      readonly: false,
    },
  ],
};

export default LegendMetadata;
