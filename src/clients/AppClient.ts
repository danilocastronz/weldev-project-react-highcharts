import { IAppContext } from '../contexts/AppContext';

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
  ChartOptions: Highcharts.Options;

  constructor() {
    this.Language = 'en';
    this.toggleLanguage = (lang: string) => {
      this.Language = lang;
    };
    this.Legend = {} as Highcharts.LegendOptions;
    this.Axes = {} as Highcharts.AxisOptions;
    this.ColorTheme = {} as Highcharts.ColorAxisOptions;
    this.Tooltip = {} as Highcharts.TooltipOptions;
    this.Title = { text: 'Test' } as Highcharts.TitleOptions;

    this.ChartOptions = {
      title: this.Title,
    } as Highcharts.Options;
  }

  changeTitle(title: string) {
    this.Title.text = title;
  }
}

export default AppClient;
