/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/pages/App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {createContext} from 'react';
import rootStore from './src/lib/stores/rootStore';
import {lightTheme} from './src/themes/light';

export const StoreContext = createContext(rootStore);

const theme = lightTheme;

function Main() {
  return (
    <StoreContext.Provider value={rootStore}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreContext.Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
