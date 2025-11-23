import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import useApi from '../lib/hooks/useApi.ts';
import {Field, FormikProvider, useFormik} from 'formik';
import * as Yup from 'yup';
import FormikEmailInput from '../components/formik/FormikEmailInput.tsx';
import {Button, Text} from 'react-native-paper';
import {useNavigation} from '../lib/hooks/useNavigation.ts';
import BaseLayout from '../components/templates/BaseLayout.tsx';

export default function ForgotPassword() {
  const {t} = useTranslation();
  const api = useApi();
  const navigation = useNavigation('AuthStack');
  const [loading, setLoading] = React.useState(false);

  const forgotPassword = (data: {email: string}) => {
    setLoading(true);
    api.forgotPassword(data).handle({
      onSuccess: res => {
        console.log('Reset Link Sent', res);
      },
      onError: err => {
        console.log('Server replied with an error:', err.response);
      },
      onFinally: () => setLoading(false),
    });
  };

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is a required field'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      forgotPassword(values);
      Keyboard.dismiss();
    },
  });

  // dummy data for the example implementation of FormikSelectInput
  // const dummyOptions = [
  //   {
  //     id: 1,
  //     value: 'Option 1',
  //   },
  //   {
  //     id: 2,
  //     value: 'Option 2',
  //   },
  //   {
  //     id: 3,
  //     value: 'Option 3',
  //   },
  // ];

  return (
    <BaseLayout extraStyles={{justifyContent: 'center'}}>
      <Text variant="headlineLarge" style={styles.title}>
        {t('forgotPassword.title')}
      </Text>
      <FormikProvider value={formik}>
        <View style={styles.fields}>
          <Field
            component={FormikEmailInput}
            name="email"
            label={t('forgotPassword.email')}
            placeholder={t('forgotPassword.email')}
          />
          {/* Example Implementation of FormikSelectInput*/}
          {/*<Field*/}
          {/*  component={FormikSelectInput}*/}
          {/*  name="selectTest"*/}
          {/*  placeholder={'Pick one option'}*/}
          {/*  options={dummyOptions}*/}
          {/*/>*/}
          <Button
            mode="contained"
            onPress={() => formik.handleSubmit()}
            loading={loading}
            style={styles.button}>
            {!loading && t('forgotPassword.submitButton')}
          </Button>
        </View>
        <View style={styles.footer}>
          <Button mode="text" onPress={() => navigation.goBack()} style={{}}>
            {t('forgotPassword.backToLogin')}
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
    marginVertical: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
