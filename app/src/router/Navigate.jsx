import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Dimensions } from "react-native";
import Home from "../screens/Home";
import Nav from "../components/Nav";

const Stack = createStackNavigator();

function Navigate() {
  const windowWidth = Dimensions.get("window").width; // Get the window's width
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Nav />,
        headerTitleContainerStyle: {
          width: windowWidth,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Navigate;
