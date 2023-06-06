import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
});
