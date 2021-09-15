import { useContext } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { NightsStay, WbSunny } from '@material-ui/icons';

import { AppContext } from '../../context/AppContext';

import { lightTheme } from '../../theme';

export const ThemeSwitch = () => {
  const context = useContext(AppContext);
  return (
    <Tooltip placement="right" title="Switch Theme">
      <IconButton onClick={context.toggleTheme} size="medium">
        {context.theme === lightTheme ? <NightsStay color="primary" /> : <WbSunny color="primary" />}
      </IconButton>
    </Tooltip>
  );
};
