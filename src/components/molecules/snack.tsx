import {StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-paper';

import {SnackbarProps} from '../../lib/types/snackbar.ts';

export default function MainSnackbar({
  message,
  isVisible,
  style,
  onDismiss,
  showCloseIcon,
  action,
  duration = 3000, // in milliseconds
  ...rest
}: SnackbarProps) {
  return (
    <Snackbar
      visible={isVisible}
      onDismiss={onDismiss} // runs always on dismiss
      action={action ? action : undefined} // also triggers onDismiss
      duration={duration}
      style={{...styles.snackbar, ...(style || {})}}
      onIconPress={showCloseIcon ? onDismiss : undefined}
      {...rest}>
      {message}
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    padding: 8,
  },
});
