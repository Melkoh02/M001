import {computed, makeAutoObservable} from 'mobx';
import {User} from '../types/user';

export class UserStore {
  user: User | null = null;
  accessToken: string | null = null;
  refreshToken: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      authHeader: computed,
    });
  }

  setUser(user: User) {
    this.user = user;
  }

  get authHeader(): {Authorization?: string} {
    return this.accessToken
      ? {Authorization: `Bearer ${this.accessToken}`}
      : {};
  }

  setTokens(access: string, refresh: string) {
    this.accessToken = access;
    this.refreshToken = refresh;
  }

  logout() {
    this.user = null;
    this.accessToken = null;
    this.refreshToken = null;
  }
}
