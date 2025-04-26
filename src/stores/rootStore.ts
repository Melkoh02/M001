import {UserStore} from './userStore';

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
