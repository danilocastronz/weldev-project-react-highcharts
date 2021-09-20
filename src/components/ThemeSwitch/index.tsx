import { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NightsStay, WbSunny } from '@mui/icons-material';

import { ColorModeContext } from '../../context/ColorModeContext';

export const ThemeSwitch = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Tooltip placement="right" title="Switch Theme">
      <IconButton onClick={colorMode.toggleColorMode} size="medium">
        {theme.palette.mode === 'light' ? <NightsStay color="primary" /> : <WbSunny color="primary" />}
      </IconButton>
    </Tooltip>
  );
};
