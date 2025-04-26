import {useContext} from 'react';
import {StoreContext} from '../../App';

export const useStore = () => {
  return useContext(StoreContext);
};
