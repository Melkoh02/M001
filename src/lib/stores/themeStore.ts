import {makeAutoObservable} from 'mobx';

export class ThemeStore {
  constructor() {
    makeAutoObservable(this);
  }
}
