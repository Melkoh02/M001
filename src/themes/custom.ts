import {MD3LightTheme} from 'react-native-paper';
import {sharedColors} from './sharedColors';

export const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...sharedColors,
  },
};
