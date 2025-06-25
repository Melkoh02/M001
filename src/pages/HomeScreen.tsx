import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native-paper';
import useApi from '../lib/hooks/useApi.ts';

export default function HomeScreen() {
  const theme = useTheme();
  const {t} = useTranslation();

  const api = useApi();
  const data = {id: 12};

  const testApiCalls = () => {
    api
      .getTest(data)
      .then(res => console.log('Success:', res.data))
      .catch(err => console.log('Error:', err));
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}>
      <Text style={{color: theme.colors.primary, padding: 10}}>
        {t('home.title')}
      </Text>
      <Button
        mode="contained-tonal"
        onPress={testApiCalls}
        style={styles.button}>
        Test API Call
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
  button: {marginTop: 16},
});
