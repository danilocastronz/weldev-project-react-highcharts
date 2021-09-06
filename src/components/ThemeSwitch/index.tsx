import { IconButton, Tooltip } from '@material-ui/core';

interface ThemeSwitchProps {
  isDefaultTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeSwitch = ({ isDefaultTheme, toggleTheme }: ThemeSwitchProps) => (
  <Tooltip placement="bottom" title="Switch Theme">
    <IconButton onClick={toggleTheme}>{isDefaultTheme ? '🌙' : '☀️'}</IconButton>
  </Tooltip>
);
