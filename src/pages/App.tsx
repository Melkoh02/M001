import React from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet, Text, View} from 'react-native';
import BaseLayout from '../components/templates/BaseLayout.tsx';
import {Button} from 'react-native-paper';
import {useTheme} from '../lib/hooks/useAppTheme.ts';

const App = observer(() => {
  const theme = useTheme();

  return (
    <BaseLayout>
      <View style={[styles.container]}>
        <Text
          style={{
            color: theme.colors.pink,
          }}>
          Hello World
        </Text>
        <Button mode="contained-tonal" onPress={() => {}}>
          <Text>Toggle Theme</Text>
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

export default App;
