import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Button} from 'react-native-paper';

import BaseLayout from '../components/templates/BaseLayout';
import {useStore} from '../lib/hooks/useStore';
import {useTheme} from '../lib/hooks/useAppTheme.ts';

export default observer(function App() {
  const {themeStore} = useStore();
  const theme = useTheme();

  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text style={{color: theme.colors.primary}}>Hello World</Text>

        <Button mode="contained-tonal" onPress={themeStore.toggle}>
          Toggle Theme
        </Button>
      </View>
    </BaseLayout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
