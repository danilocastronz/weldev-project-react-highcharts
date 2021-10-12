import { Metadata, MetadataOptionType, MetadataType } from '../../types/Metadata';

const ChartTypeMetadata: Metadata = {
  id: 'chartType',
  type: MetadataType.ChartType,
  title: 'Chart Type',
  description: 'Choose Chart Type',
  enabled: true,
  customizations: [
    {
      title: 'Bar',
      type: MetadataOptionType.Chart,
    },
    {
      title: 'Column',
      type: MetadataOptionType.Chart,
    },
    {
      title: 'Pie',
      type: MetadataOptionType.Chart,
    },
    {
      title: 'Line',
      type: MetadataOptionType.Chart,
    },
    {
      title: 'Donut',
      type: MetadataOptionType.Chart,
    },
  ],
};

export default ChartTypeMetadata;
