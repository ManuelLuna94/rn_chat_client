import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Button, Keyboard } from "react-native";
import uuid from "react-native-uuid";
import { socket } from "../App";

import { MyContext } from "../App";

function MessageInput() {
  const { username } = useContext(MyContext);

  console.log(username);

  const [message, setMessage] = useState("");

  const submitHandler = () => {
    if (message === "") return;
    const newMessage = { username: username, content: message, id: uuid.v1() };
    socket.emit("new-message", newMessage);
    setMessage("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
        onSubmitEditing={submitHandler}
      />
      <Button title="Send" style={styles.button} onPress={submitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "grey",
    flex: 3,
  },
  button: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    width: "100%",
  },
});

export default MessageInput;
