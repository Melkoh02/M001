import {action, computed, makeAutoObservable} from 'mobx';
import {User} from '../types/user';

interface AuthResponse {
  access: string;
  refresh: string;
  user: User;
}

export class UserStore {
  user: User | null = null;
  accessToken: string | null = null;
  refreshToken: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      authHeader: computed,
      setAuth: action.bound,
      logout: action.bound,
    });
  }

  /**
   * Computed helper that builds the Authorization header.
   */
  get authHeader(): {Authorization?: string} {
    return this.accessToken
      ? {Authorization: `Bearer ${this.accessToken}`}
      : {};
  }

  /**
   * Populate the store with tokens and user data returned from login.
   */
  setAuth({access, refresh, user}: AuthResponse) {
    this.accessToken = access;
    this.refreshToken = refresh;
    this.user = user;
  }

  /**
   * Clears all authentication and user data.
   */
  logout() {
    this.user = null;
    this.accessToken = null;
    this.refreshToken = null;
  }
}
