import React from 'react';

interface AppContextProps {
  /* Theme Props */
  isDefaultTheme: boolean;
  toggleTheme: () => void;
  /* Chart Props */
  Legend: [string, string];
  Axes: [string, string];
  ColorTheme: [string, string];
  Tooltip: [string, string];
  /* Language Translation */
  Language: string;
}

export const AppContext = React.createContext<AppContextProps>({} as AppContextProps);
