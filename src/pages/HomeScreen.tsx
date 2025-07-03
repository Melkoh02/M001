import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {useTranslation} from 'react-i18next';

export default function HomeScreen() {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}>
      <Text style={{color: theme.colors.primary, padding: 10}}>
        {t('home.title')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {marginTop: 16},
});
