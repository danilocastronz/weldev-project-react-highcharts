import { IAppContext } from './AppContext';

class AppClient implements IAppContext {
  /* i18n */
  Language: string;
  toggleLanguage: (lang: string) => void;

  /* Chart */
  Legend: Highcharts.LegendOptions;
  Axes: Highcharts.AxisOptions;
  ColorTheme: Highcharts.ColorAxisOptions;
  Tooltip: Highcharts.TooltipOptions;
  Title: Highcharts.TitleOptions;

  constructor() {
    this.Language = 'en';
    this.toggleLanguage = (lang: string) => {
      this.Language = lang;
    };
    this.Legend = {} as Highcharts.LegendOptions;
    this.Axes = {} as Highcharts.AxisOptions;
    this.ColorTheme = {} as Highcharts.ColorAxisOptions;
    this.Tooltip = {} as Highcharts.TooltipOptions;
    this.Title = { text: 'Dan' } as Highcharts.TitleOptions;
  }
}

export default AppClient;
