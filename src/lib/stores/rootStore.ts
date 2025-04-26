import {UserStore} from './userStore.ts';
import {ThemeStore} from './themeStore.ts';

export class RootStore {
  userStore: UserStore;
  themeStore: ThemeStore;

  constructor() {
    this.userStore = new UserStore();
    this.themeStore = new ThemeStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
