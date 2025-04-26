import React from 'react';
import { View, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
