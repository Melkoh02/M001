import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {observer} from 'mobx-react-lite';

import {useTheme} from '../lib/hooks/useAppTheme';
import {useStore} from '../lib/hooks/useStore';
import {useTranslation} from 'react-i18next';
import {toggleLanguage} from '../lib/helpers/toggleLanguage.ts';

const SettingsScreen = () => {
  const theme = useTheme();
  const {themeStore, languageStore} = useStore();
  const {t} = useTranslation();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={[styles.title, {color: theme.colors.primary}]}>
        {t('settings.title')}
      </Text>

      <Button
        mode="contained-tonal"
        onPress={themeStore.toggle}
        style={styles.button}>
        {t('settings.toggleTheme')}
      </Button>

      <Button
        mode="contained-tonal"
        onPress={() => toggleLanguage(languageStore)}
        style={styles.button}>
        {t('settings.switchLanguage')}
      </Button>
    </View>
  );
};

export default observer(SettingsScreen);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {padding: 10},
  button: {marginTop: 16},
});
