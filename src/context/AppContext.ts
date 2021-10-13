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
}

// Creates a context for the application
export const AppContext = createContext<IAppContext>({} as IAppContext);
