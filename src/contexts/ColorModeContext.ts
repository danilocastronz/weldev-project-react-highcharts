import { createContext } from 'react';

interface IColorModeContext {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext({} as IColorModeContext);
