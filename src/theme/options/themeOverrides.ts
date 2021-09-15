import { Overrides } from '@material-ui/core/styles/overrides';

const themeOverrides: Overrides = {
  MuiIconButton: {
    root: {
      '&:hover': {
        boxShadow: 'rgba(5, 105, 236, 0.5) 0px 2px 4px',
        backgroundColor: 'transparent',
      },
    },
  },
};

export default themeOverrides;
