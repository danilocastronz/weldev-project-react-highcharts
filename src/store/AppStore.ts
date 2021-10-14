import { makeAutoObservable } from 'mobx';

import { IAppStore } from '../contexts/AppContext';
import { GetChartXAxisDefault, GetChartYAxisDefault } from '../utils/Charts/Axes';
import { GetChartLegendDefault } from '../utils/Charts/Legends';
import { GetChartSeriesDefault } from '../utils/Charts/Series';
import { GetChartSubTitleDefault, GetChartTitleDefault } from '../utils/Charts/Title';

export class AppStore implements IAppStore {
  chartOptions: Highcharts.Options;

  constructor() {
    makeAutoObservable(this);

    // set initial state to chart
    this.chartOptions = {} as Highcharts.Options;
    this.chartOptions.title = GetChartTitleDefault();
    this.chartOptions.subtitle = GetChartSubTitleDefault();
    this.chartOptions.xAxis = GetChartXAxisDefault();
    this.chartOptions.yAxis = GetChartYAxisDefault();
    this.chartOptions.legend = GetChartLegendDefault();
    this.chartOptions.series = GetChartSeriesDefault();
    this.chartOptions.responsive = {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    } as Highcharts.ResponsiveOptions;
  }

  applyChartTitleAndSubtitle(title: string, subTitle: string) {
    this.chartOptions = {
      ...this.chartOptions,
      title: {
        ...this.chartOptions.title,
        text: title,
      },
      subtitle: {
        ...this.chartOptions.subtitle,
        text: subTitle,
      },
    };
  }
}
