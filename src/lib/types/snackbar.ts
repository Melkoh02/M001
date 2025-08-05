export type SnackbarProps = {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
  style?: object;
  duration?: number | undefined;
  showCloseIcon?: string;
  action?: {
    label: string;
    onPress: () => void;
  };
};
