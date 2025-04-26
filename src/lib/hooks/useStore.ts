import {useContext} from 'react';
import {StoreContext} from '../../../App.tsx';

export const useStore = () => {
  return useContext(StoreContext);
};
