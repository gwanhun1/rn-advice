import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigate from "./app/src/router/Navigate";

function App() {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}

export default App;
