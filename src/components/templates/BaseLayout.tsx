import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({children}: BaseLayoutProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <StatusBar
        barStyle={theme.scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={{flex: 1}}>{children}</View>
    </SafeAreaView>
  );
};

export default BaseLayout;
