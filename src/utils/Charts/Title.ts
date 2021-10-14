import * as Highcharts from 'highcharts';

// generates highcharts legend
export const GetChartTitleDefault = (): Highcharts.TitleOptions => {
  const title: Highcharts.TitleOptions = {};
  title.text = 'Solar Employment Growth by Sector, 2010-2016';
  return title;
};

export const GetChartSubTitleDefault = (): Highcharts.SubtitleOptions => {
  const subTitle: Highcharts.SubtitleOptions = {};
  subTitle.text = 'Source: thesolarfoundation.com';
  return subTitle;
};
