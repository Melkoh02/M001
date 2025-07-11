import type {StyleProp, ViewStyle} from 'react-native';

export interface SelectInputOptionsProp {
  id: string;
  value: string;
}

export interface SelectInputProps {
  /** controlled selected id */
  value: string;
  /** called with new id (or '' to clear) */
  onChange: (id: string) => void;
  /** input placeholder when nothing’s selected */
  label?: string;
  /** list of all options */
  options: SelectInputOptionsProp[];
  /**
   * optional search-hook:
   * if provided, parent drives `options`
   * otherwise we filter `options` locally
   */
  onSearch?: (query: string) => void;
  /** style for the TextInput */
  style?: StyleProp<ViewStyle>;

  /** any other TextInput props (mode, dense, etc.) */
  [key: string]: any;
}
