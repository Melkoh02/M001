import {lightTheme} from './light';
import {darkTheme} from './dark';
import {customTheme} from './custom';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
};

export type ThemeType = keyof typeof themes;
export type Theme = typeof lightTheme;
