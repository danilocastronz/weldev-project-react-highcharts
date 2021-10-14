import { Metadata, MetadataType, MetadataOptionType } from '../../types/Metadata';

const AxisMetadata: Metadata = {
  id: 'axis',
  type: MetadataType.Axes,
  title: 'Axes',
  enabled: true,
  customizations: [
    {
      title: 'Title',
      type: MetadataOptionType.Text,
      readonly: false,
    },
    {
      title: 'Opposite side of chart',
      type: MetadataOptionType.Checkbox,
      readonly: false,
    },
    {
      title: 'Reversed Direction',
      type: MetadataOptionType.Checkbox,
      readonly: false,
    },
  ],
};

export default AxisMetadata;
