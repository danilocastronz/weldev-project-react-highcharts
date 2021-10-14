import * as Highcharts from 'highcharts';

export const GetChartXAxisDefault = (): Highcharts.XAxisOptions => {
  const xAxis: Highcharts.XAxisOptions = {};
  xAxis.accessibility = {
    rangeDescription: 'Range: 2010 to 2017',
  };
  return xAxis;
};

export const GetChartYAxisDefault = (): Highcharts.YAxisOptions => {
  const yAxis: Highcharts.YAxisOptions = {};
  yAxis.title = {
    text: 'Number of Employees',
  };
  return yAxis;
};
