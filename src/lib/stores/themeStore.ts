import {makeAutoObservable} from 'mobx';
import {themes, ThemeType, Theme} from '../../themes';

export class ThemeStore {
  currentTheme: Theme = themes.light;
  mode: ThemeType = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (mode: ThemeType) => {
    this.mode = mode;
    this.currentTheme = themes[mode];
  };

  toggleTheme = () => {
    this.setTheme(this.mode === 'light' ? 'dark' : 'light');
  };
}
