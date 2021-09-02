import '@emotion/react';
import { ThemeOptions } from '@material-ui/core/styles';

declare module '@emotion/react' {
  export interface Theme extends ThemeOptions {}
}
