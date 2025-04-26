import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';

type BaseLayoutProps = {
  children: React.ReactNode;
};

const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default BaseLayout;
