import React from 'react';
import {View} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import {BaseFormikInputProps} from '../../lib/types/formik.ts';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';
import {getIn} from 'formik';

export function BaseFormikInput({
  field,
  form,
  style,
  ...rest
}: BaseFormikInputProps) {
  const theme = useTheme();

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const showError = Boolean(touched && error);

  return (
    <View>
      <TextInput
        {...rest}
        value={field.value}
        onChangeText={field.onChange(field.name)}
        onBlur={field.onBlur(field.name)}
        error={showError}
        style={[
          {backgroundColor: theme.colors.surface, paddingHorizontal: 0},
          style,
        ]}
      />
      {showError && (
        <Text
          variant="bodySmall"
          style={{color: theme.colors.error, marginTop: 4}}>
          {error}
        </Text>
      )}
    </View>
  );
}
