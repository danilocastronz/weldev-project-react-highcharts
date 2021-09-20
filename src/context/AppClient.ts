import { IAppContext } from './AppContext';

class AppClient implements IAppContext {
  /* i18n */
  Language: string;
  toggleLanguage: (lang: string) => void;
  /* Chart */
  Legend: [string, string];
  Axes: [string, string];
  ColorTheme: [string, string];
  Tooltip: [string, string];

  constructor() {
    this.Language = 'en';
    this.toggleLanguage = (lang: string) => {
      this.Language = lang;
    };
    this.Legend = ['Legend', 'Legend'];
    this.Axes = ['Axes', 'Axes'];
    this.ColorTheme = ['ColorTheme', 'ColorTheme'];
    this.Tooltip = ['Tooltip', 'Tooltip'];
  }
}

export default AppClient;
