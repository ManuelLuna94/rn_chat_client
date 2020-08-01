import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import SignIn from "./views/SignIn";

export const MyContext = createContext();

export default function App() {
  const [value, setValue] = useState('');

  return (
    <MyContext.Provider value={{ username: value, setUsername: setValue }}>
      <View style={styles.container}>
        {
          !value ?  <SignIn /> : <ActivityIndicator /> 
        }
        <StatusBar style="auto" />
      </View>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372E2E",
    alignItems: "center",
    justifyContent: "center",
  },
});
