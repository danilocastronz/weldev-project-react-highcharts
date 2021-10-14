import { IAppStore } from '../../contexts/AppContext';
import { Metadata, MetadataType, MetadataOptionType } from '../../types/Metadata';

const TitleMetadata: Metadata = {
  id: 'title',
  type: MetadataType.Title,
  title: 'Title And Subtitle',
  enabled: true,
  customizations: [
    {
      title: 'Title',
      type: MetadataOptionType.Text,
      value: 'Solar Employment Growth by Sector, 2010-2016',
      readonly: false,
    },
    {
      title: 'Subtitle',
      type: MetadataOptionType.Text,
      value: 'Source: thesolarfoundation.com',
      readonly: false,
    },
  ],
  onCallback: (appStoreInstance: IAppStore) =>
    appStoreInstance.applyChartTitleAndSubtitle('PD Shine', 'by Danilo Castro'),
};

export default TitleMetadata;
