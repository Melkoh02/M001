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
  const [loading, setLoading] = React.useState(true);

  const testApiCalls = () => {
    setLoading(true);
    api.getTest().handle({
      onSuccess: payload => {
        console.log('Got back:', payload.test);
      },
      onError: err => {
        console.log('Server replied with an error:', err.response?.status);
      },
      successMessage: 'test endpoint succeeded!',
      errorMessage: 'test endpoint failed!',
      onFinally: () => setLoading(false),
    });
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
