import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SignIn from "./views/SignIn";

export const MyContext = createContext();

export default function App() {
  const [value, setValue] = useState('');

  return (
    <MyContext.Provider value={{ username: value, setUsername: setValue }}>
      <View style={styles.container}>
        <SignIn />
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
