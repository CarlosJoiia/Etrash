import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Routes from "./src/Routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Routes.HomeStack} />
        <Tab.Screen name="Chat" component={Routes.ChatStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
