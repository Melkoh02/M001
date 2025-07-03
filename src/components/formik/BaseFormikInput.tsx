import React from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import {BaseFormikInputProps} from '../../lib/types/formik.ts';

export function BaseFormikInput({
  field,
  form,
  meta,
  style,
  ...rest
}: BaseFormikInputProps) {
  const theme = useTheme();

  return (
    <>
      <TextInput
        {...rest}
        value={field.value}
        onChangeText={field.onChange(field.name)}
        onBlur={field.onBlur(field.name)}
        style={[{backgroundColor: theme.colors.surface}, style]}
      />
    </>
  );
}
