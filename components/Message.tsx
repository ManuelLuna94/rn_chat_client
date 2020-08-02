import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MyContext } from "../App";

function Message(props) {
  const { username } = useContext(MyContext);
  const { from, content } = props;
  return (
    <View
      style={[
        styles.container,
        username === from && styles.own,
        username !== from && styles.other,
        content.includes("the chat") && styles.has,
      ]}
    >
      <Text
        style={[
          styles.from,
          content.includes("the chat") && { textAlign: "center" },
        ]}
      >
        {from}
        {content.includes("the chat") ? "" : " says"}
      </Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
  },
  from: {
    color: "#fff",
    opacity: 0.8,
  },
  content: {
    color: "#fff",
  },
  own: {
    backgroundColor: "green",
    marginLeft: "45%",
    marginRight: "5%",
  },
  other: {
    backgroundColor: "cyan",
    marginLeft: "5%",
  },
  has: {
    backgroundColor: "transparent",
    textAlign: "center",
    marginLeft: "25%",
  },
});

export default Message;
