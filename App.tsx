import { StatusBar } from "expo-status-bar";
import React, { createContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import io from "socket.io-client";

import SignIn from "./views/SignIn";
import Chat from "./views/Chat";
import { SOCKET_URL } from "react-native-dotenv";

export const MyContext = createContext();

export const socket = io(SOCKET_URL);

export default function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "") return;
    socket.emit("new-user", value);
    console.log("hello");
  }, [value]);

  return (
    <MyContext.Provider value={{ username: value, setUsername: setValue }}>
      <View style={styles.container}>
        {!value ? <SignIn /> : <Chat />}
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
