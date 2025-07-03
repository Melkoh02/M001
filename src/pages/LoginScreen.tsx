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

export default function LoginScreen() {
  const theme = useTheme();
  const {t} = useTranslation();
  const api = useApi();
  const [loading, setLoading] = React.useState(true);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is a required field'),
    password: Yup.string().required('Password is a required field'),
  });

  const onLoginPress = () => {
    console.log('Submitting...');
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
          style={styles.button}>
          {t('login.loginButton')}
        </Button>
      </FormikProvider>
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
