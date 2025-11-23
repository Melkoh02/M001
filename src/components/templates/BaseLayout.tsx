import React, {useCallback} from 'react';
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

const insetsEdges: Edge[] = ['top', 'bottom'];

const BaseLayout = ({
  disableKeyboardDismiss,
  extraStyles,
  children,
}: BaseLayoutProps) => {
  const theme = useTheme();

  const handleBackgroundPress = useCallback(() => {
    if (disableKeyboardDismiss) return;
    Keyboard.dismiss();
  }, [disableKeyboardDismiss]);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={insetsEdges}
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}>
        <StatusBar
          barStyle={theme.scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <TouchableWithoutFeedback
          onPress={handleBackgroundPress}
          accessible={false}>
          <View style={[{flex: 1, paddingHorizontal: 18}, extraStyles]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BaseLayout;
