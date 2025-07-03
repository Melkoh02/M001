import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {useTranslation} from 'react-i18next';
import useApi from '../lib/hooks/useApi.ts';
import {Field, FormikProvider, useFormik} from 'formik';
import * as Yup from 'yup';
import FormikEmailInput from '../components/formik/FormikEmailInput.tsx';
import FormikPasswordInput from '../components/formik/FormikPasswordInput.tsx';
import {Button} from 'react-native-paper';
import {useStore} from '../lib/hooks/useStore.ts';
import {logStore} from '../lib/helpers/logStore.ts';

export default function LoginScreen() {
  const theme = useTheme();
  const {t} = useTranslation();
  const api = useApi();
  const rootStore = useStore();
  const [loading, setLoading] = React.useState(false);

  const login = (data: {email: string; password: string}) => {
    setLoading(true);
    api.login(data).handle({
      onSuccess: res => {
        rootStore.userStore.setAuth(res);
      },
      onError: err => {
        console.log('Server replied with an error:', err.response);
      },
      onFinally: () => setLoading(false),
    });
  };

  const initialValues = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is a required field'),
    password: Yup.string().required('Password is a required field'),
  });

  const onLoginPress = () => {
    login(formik.values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onLoginPress,
  });

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}>
      <Text style={{color: theme.colors.primary, padding: 10}}>
        {t('login.title')}
      </Text>
      <FormikProvider value={formik}>
        <Field
          component={FormikEmailInput}
          name="email"
          label="Email"
          placeholder={'Email'}
        />
        <Field
          component={FormikPasswordInput}
          name="password"
          label="Password"
          placeholder={'Password'}
        />
        <Button
          mode="contained-tonal"
          onPress={onLoginPress}
          loading={loading}
          style={styles.button}>
          {loading ? '' : t('login.loginButton')}{' '}
        </Button>
      </FormikProvider>
      <Button mode="contained-tonal" onPress={logStore} style={styles.button}>
        Log store values
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  button: {marginTop: 16},
});
