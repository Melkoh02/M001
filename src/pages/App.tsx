import React from 'react';
import {createContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Button, Text, View, StyleSheet} from 'react-native';
import BaseLayout from '../components/templates/BaseLayout.tsx';
import rootStore from '../lib/stores/rootStore.ts';
import {useTheme} from '../lib/hooks/useTheme.ts';

export const StoreContext = createContext(rootStore);

const App = observer(() => {
  const {currentTheme, toggleTheme} = useTheme();

  return (
    <StoreContext.Provider value={rootStore}>
      <BaseLayout>
        <View
          style={[
            styles.container,
            {backgroundColor: currentTheme.backgroundColor},
          ]}>
          <Text style={{color: currentTheme.textColor}}>Hello World</Text>
          <Button title="Toggle Theme" onPress={() => toggleTheme()} />
        </View>
      </BaseLayout>
    </StoreContext.Provider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
