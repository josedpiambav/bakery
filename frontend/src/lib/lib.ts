import { Theme as MuiTheme } from '@mui/material/styles';
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
