import {action, makeAutoObservable, observable} from 'mobx';
import {lightTheme} from '../../themes/light.ts';
import {darkTheme} from '../../themes/dark.ts';

type Scheme = 'light' | 'dark' | 'custom';

export class ThemeStore {
  /** current colour-scheme */
  scheme: Scheme = 'light';

  constructor() {
    makeAutoObservable(this, {
      scheme: observable, // plain observable value
      toggle: action.bound, // action
      theme: false, // ← exclude getter from auto-magic
    });
  }

  /** Paper-theme object that the UI actually consumes */
  get theme() {
    const base = this.scheme === 'light' ? lightTheme : darkTheme;
    return {
      ...base,
      scheme: this.scheme,
    };
  }

  toggle() {
    this.scheme = this.scheme === 'light' ? 'dark' : 'light';
  }
}
