import React from 'react';
import {createContext} from 'react';
import BaseLayout from './src/components/templates/BaseLayout';
import {Text} from 'react-native';
import rootStore from './src/store/rootStore.ts';

export const StoreContext = createContext(rootStore);

const App = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <BaseLayout>
        <Text> Hello World </Text>
      </BaseLayout>
    </StoreContext.Provider>
  );
};

export default App;
