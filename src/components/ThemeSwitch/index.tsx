import { IconButton } from '@material-ui/core';

interface ThemeSwitchProps {
  isDefaultTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeSwitch = ({ isDefaultTheme, toggleTheme }: ThemeSwitchProps) => {
  return (
    <div>
      <IconButton onClick={toggleTheme}>{isDefaultTheme ? '🌙' : '☀️'}</IconButton>
    </div>
  );
};
