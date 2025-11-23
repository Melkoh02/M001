import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useTheme} from '../lib/hooks/useAppTheme.ts';
import {useTranslation} from 'react-i18next';
import useApi from '../lib/hooks/useApi.ts';
import {Field, FormikProvider, useFormik} from 'formik';
import * as Yup from 'yup';
import FormikEmailInput from '../components/formik/FormikEmailInput.tsx';
import FormikPasswordInput from '../components/formik/FormikPasswordInput.tsx';
import {Button, Text} from 'react-native-paper';
import {useStore} from '../lib/hooks/useStore.ts';
import {useNavigation} from '@react-navigation/native';
import BaseLayout from '../components/templates/BaseLayout.tsx';

export default function SignUpScreen() {
  const theme = useTheme();
  const {t} = useTranslation();
  const api = useApi();
  const rootStore = useStore();
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const signUp = (data: {email: string; password: string}) => {
    setLoading(true);
    api.signUp(data).handle({
      onSuccess: res => {
        rootStore.userStore.setAuth(res);
      },
      onFinally: () => setLoading(false),
    });
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is a required field'),
    password: Yup.string().required('Password is a required field'),
    confirmPassword: Yup.string().required(
      'Confirm Password is a required field',
    ),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      signUp(values);
      Keyboard.dismiss();
    },
  });

  return (
    <BaseLayout extraStyles={{justifyContent: 'center'}}>
      <Text variant="headlineLarge" style={styles.title}>
        {t('signUp.title')}
      </Text>
      <FormikProvider value={formik}>
        <View style={styles.fields}>
          <Field
            component={FormikEmailInput}
            name="email"
            label={t('signUp.email')}
            placeholder={t('signUp.emailPlaceholder')}
          />
          <Field
            component={FormikPasswordInput}
            name="password"
            label={t('signUp.password')}
            placeholder={t('signUp.passwordPlaceholder')}
          />
          <Field
            component={FormikPasswordInput}
            name="confirmPassword"
            label={t('signUp.confirmPassword')}
            placeholder={t('signUp.confirmPasswordPlaceholder')}
          />
          <Button
            mode="contained"
            onPress={() => formik.handleSubmit()}
            loading={loading}
            disabled={loading}
            style={styles.button}>
            {!loading && t('signUp.signUpButton')}
          </Button>
        </View>
        <View style={styles.footer}>
          <Text style={{color: theme.colors.onBackground}}>
            {t('signUp.backToLogin')}
          </Text>
          <Button mode="text" onPress={() => navigation.goBack()}>
            {t('login.loginButton')}
          </Button>
        </View>
      </FormikProvider>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    marginBottom: 32,
  },
  fields: {
    gap: 20,
  },
  button: {
    marginTop: 24,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
