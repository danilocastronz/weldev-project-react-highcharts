import { IconButton, Tooltip } from '@material-ui/core';
import { NightsStay, WbSunny } from '@material-ui/icons';

interface ThemeSwitchProps {
  isDefaultTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeSwitch = ({ isDefaultTheme, toggleTheme }: ThemeSwitchProps) => (
  <Tooltip placement="right" title="Switch Theme">
    <IconButton onClick={toggleTheme} size="medium">
      {isDefaultTheme ? <NightsStay color="primary" /> : <WbSunny color="primary" />}
    </IconButton>
  </Tooltip>
);
