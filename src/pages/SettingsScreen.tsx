import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {useStore} from '../lib/hooks/useStore.ts';

export default function SettingsScreen() {
  const theme = useTheme();
  const {themeStore} = useStore();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}>
      <Text style={{color: theme.colors.primary, padding: 10}}>
        Settings Screen
      </Text>
      <Button mode="contained-tonal" onPress={themeStore.toggle}>
        Toggle Theme
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
