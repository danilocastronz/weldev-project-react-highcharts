import { Metadata, MetadataOptionType, MetadataType } from '../../types/Metadata';

const TooltipMetadata: Metadata = {
  id: 'tooltip',
  type: MetadataType.Tooltip,
  title: 'Tooltip',
  description: 'Customize Series Tooltip',
  enabled: true,
  customizations: [
    {
      title: 'Show Tooltip',
      value: true,
      type: MetadataOptionType.Checkbox,
      readonly: false,
    },
    {
      title: 'Shared Tooltip',
      value: false,
      type: MetadataOptionType.Checkbox,
      readonly: false,
    },
    {
      title: 'Background Color',
      value: '#FFF',
      type: MetadataOptionType.ColorPicker,
      readonly: false,
    },
    {
      title: 'Border Color',
      value: '#FFF',
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

export default TooltipMetadata;
