import React from 'react';
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {
  Edge,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {useTheme} from '../../lib/hooks/useAppTheme';

type BaseLayoutProps = {
  extraStyles?: ViewStyle;
  children: React.ReactNode;
  disableKeyboardDismiss?: boolean;
};

const insetsEdges: Edge[] = ['top'];

const BaseLayout = ({
  disableKeyboardDismiss,
  extraStyles,
  children,
}: BaseLayoutProps) => {
  const theme = useTheme();

  const handleBackgroundPress = () => {
    if (disableKeyboardDismiss) return;
    Keyboard.dismiss();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={insetsEdges}
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: theme.colors.background,
        }}>
        <StatusBar
          barStyle={theme.scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <TouchableWithoutFeedback
          onPress={handleBackgroundPress}
          accessible={false}>
          <View style={[{flex: 1}, extraStyles]}>{children}</View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BaseLayout;
