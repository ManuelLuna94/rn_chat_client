import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

import useInput from '../hooks/useInput.ts';

function SignIn() {
  const [username, updateUsername, charsLeft] = useInput();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a username</Text>
      <View>
        <TextInput style={styles.input} onChangeText={updateUsername} value={username} />
        <Text style={[styles.charsLeft, charsLeft === 0 && styles.zero]}>{charsLeft} characters left.</Text>
      </View>
      <View style={styles.button}>
        <Button title="Enter" color="#222222"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '10%',
    backgroundColor: '#5C5A5A',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '10%',
    borderRadius: 15
  },
  title: {
    color: '#fff',
    fontSize: 36
  },
  input: {
    backgroundColor: '#D3D1D1',
    paddingVertical: 4,
    paddingHorizontal: 10,
    color: '#000',
    textAlign: 'center'
  },
  button: {
    width: 150
  },
  charsLeft: {
    color: '#fff',
    opacity: 0.6,
    textAlign: 'center'
  },
  zero: {
    color: 'crimson'
  }
});

export default SignIn;
