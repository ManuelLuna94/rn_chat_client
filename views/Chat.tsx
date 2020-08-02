import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import uuid from "react-native-uuid";

import { socket } from "../App";

import MessageInput from "../components/MessageInput";
import Message from "../components/Message";

function Chat() {
  const [messages, setMessages] = useState([]);

  socket.on("message", (message) => setMessages([...messages, message]));

  socket.on("user-disconnect", (user) => {
    const leaveMessage = {
      from: user,
      content: `${user} left the chat`,
      id: uuid.v1(),
    };
    setMessages([...messages, leaveMessage]);
  });

  socket.on("user", (user) => {
    const enterMessage = {
      from: user,
      content: `${user} has entered the chat`,
      id: uuid.v1(),
    };
    setMessages([...messages, enterMessage]);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item: { username, content } }) => (
          <Message from={username} content={content} />
        )}
        style={styles.list}
      />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    paddingTop: 100,
    backgroundColor: "#000",
    opacity: 0.5,
    height: "90%",
  },
  list: {
    height: "100%",
  },
});

export default Chat;
