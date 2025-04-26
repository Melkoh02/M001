import {makeAutoObservable} from 'mobx';
import {User} from '../lib/types/user.ts';

export class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }
}
