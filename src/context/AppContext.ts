import { createContext } from 'react';

interface AppContextProps {
  /* Theme Props */
  isDefaultTheme: boolean;
  toggleTheme: () => void;
  /* i18n */
  Language: string;
  toggleLanguage: (lang: string) => void;
  /* Chart Props */
  Legend: [string, string];
  Axes: [string, string];
  ColorTheme: [string, string];
  Tooltip: [string, string];
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
