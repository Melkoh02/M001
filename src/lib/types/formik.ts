import type {
  FieldInputProps,
  FieldMetaProps,
  FieldProps,
  FormikProps,
} from 'formik';
import type {TextInputProps} from 'react-native-paper';

export type BaseFormikInputProps = {
  field: FieldInputProps<string>;
  meta: FieldMetaProps<string>;
  form: FormikProps<any>;
} & Omit<TextInputProps, 'value' | 'onChangeText'> & {label: string};

interface SelectInputOptionsProp {
  id: string;
  value: string;
}

export interface FormikSelectInputProps
  extends FieldProps,
    Pick<BaseFormikInputProps, 'style'> {
  placeholderText?: string;
  options: SelectInputOptionsProp[];
  defaultValue?: string;
  onSearch?: (query: string) => void;
}
