import * as Highcharts from 'highcharts';

// generates highcharts legend
export const GetChartLegendDefault = (): Highcharts.LegendOptions => {
  const legend: Highcharts.LegendOptions = {};
  legend.layout = 'vertical';
  legend.align = 'right';
  legend.verticalAlign = 'middle';

  return legend;
};
