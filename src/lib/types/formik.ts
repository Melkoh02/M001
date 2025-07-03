import type {FieldInputProps, FieldMetaProps, FormikProps} from 'formik';
import type {TextInputProps} from 'react-native-paper';

export type BaseFormikInputProps = {
  field: FieldInputProps<string>;
  meta: FieldMetaProps<string>;
  form: FormikProps<any>;
} & Omit<TextInputProps, 'value' | 'onChangeText'> & {label: string};
