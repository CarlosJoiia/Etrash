import HomeScreen from "../Home";
import DetailScreen from "../Detail";
import ChatScreen from "../Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatStack" component={ChatScreen} />
    </Stack.Navigator>
  );
}
