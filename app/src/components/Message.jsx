import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../utils/color";

const Message = ({ title, message, onPress, id, select }) => {
  const borderClr = [
    styles.container,
    { borderColor: "green", borderWidth: 2 },
  ];
  return (
    <TouchableOpacity
      style={id === select ? borderClr : styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.messageBox}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.gray,
    padding: 10,
    height: 150,
  },
  title: {
    flex: 1,
    fontSize: 20,
    marginLeft: 5,
  },
  message: {
    flex: 5,
    fontSize: 15,
  },
  messageBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
