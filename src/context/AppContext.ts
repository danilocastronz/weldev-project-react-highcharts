import { createContext } from 'react';

export interface IAppContext {
  /* i18n */
  Language: string;
  toggleLanguage: (lang: string) => void;
  /* Chart */
  Legend: [string, string];
  Axes: [string, string];
  ColorTheme: [string, string];
  Tooltip: [string, string];
}

// Creates a context for the application
export const AppContext = createContext<IAppContext>({} as IAppContext);
