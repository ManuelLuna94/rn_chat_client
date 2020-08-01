import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from './views/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
