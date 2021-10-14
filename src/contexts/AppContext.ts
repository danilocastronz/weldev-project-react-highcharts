import { createContext } from 'react';

export interface IAppContext {
  /* i18n */
  Language: string;
  toggleLanguage: (lang: string) => void;
  /* Chart */
  Legend: Highcharts.LegendOptions;
  Axes: Highcharts.AxisOptions;
  ColorTheme: Highcharts.ColorAxisOptions;
  Tooltip: Highcharts.TooltipOptions;
  Title: Highcharts.TitleOptions;
  ChartOptions: Highcharts.Options;
  changeTitle: (title: string) => void;
}

export interface IAppStore {
  chartOptions: Highcharts.Options;
  applyChartTitleAndSubtitle: (title: string, subTitle: string) => void;
}

// Creates a context for the application
export const AppContext = createContext<IAppStore>({} as IAppStore);
