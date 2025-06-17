import {UserStore} from './userStore.ts';
import {ThemeStore} from './themeStore.ts';
import {LanguageStore} from './languageStore.ts';

export class RootStore {
  userStore: UserStore;
  themeStore: ThemeStore;
  languageStore: LanguageStore;

  constructor() {
    this.userStore = new UserStore();
    this.themeStore = new ThemeStore();
    this.languageStore = new LanguageStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
