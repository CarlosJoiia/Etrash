import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import * as Routes from "./src/Routes";
import LoginScreen from "./src/Login";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface TabScreenProps {
  name: string;
  component: React.ComponentType<any>;
  icon: string; // Add an icon prop for each tab screen
}

function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green", // Define a cor verde para a guia ativa
        tabBarInactiveTintColor: "black", // Add a default inactive tint color
      }}
    >
      <Tab.Screen
        name="Home"
        component={Routes.HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/map-pinned.png")
                  : require("./assets/map-pin.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Routes.ChatStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/message-circle.png")
                  : require("./assets/message-circle.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Educação"
        component={Routes.EducationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/book-open-text.png")
                  : require("./assets/book-marked.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
