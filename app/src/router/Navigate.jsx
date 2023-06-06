import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Dimensions } from "react-native";
import Home from "../screens/Home";
import Nav from "../components/Nav";

const Stack = createStackNavigator();

function Navigate() {
  const windowWidth = Dimensions.get("window").width; // 화면의 넓이 가져오기
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          width: windowWidth,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Nav />,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigate;
