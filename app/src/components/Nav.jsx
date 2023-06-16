import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../utils/color";
import { Feather } from "@expo/vector-icons";

const Nav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnBox}></View>
      <Image source={require("../assets/logo.png")} style={styles.logoBox} />
      <View style={styles.btnBox}>
        <Feather name="menu" size={24} color="black" />
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: "33%",
    fontSize: 20,
    textAlign: "center",
  },
  btnBox: {
    alignItems: "flex-end",
    width: "33%",
  },
  logoBox: {
    width: "33%",
    height: "130%",
  },
});
