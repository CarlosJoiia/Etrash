import HomeScreen from "../Home";
import DetailScreen from "../Detail";
import ChatScreen from "../Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EducationScreen from "../Education/Education";
import Educational from "../Education/TextsEducation/Educational";
import Health from "../Education/TextsEducation/Health";
import Planet from "../Education/TextsEducation/Planet";
import Politcs from "../Education/TextsEducation/Politcs";
import Privacy from "../Education/TextsEducation/Privacy";
import Ewaste from "../Education/TextsEducation/Ewaste";

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

export function EducationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EducationStack"
        options={{
          headerShown: false,
        }}
        component={EducationScreen}
      />
      <Stack.Screen name="Ewaste" component={Ewaste} />
      <Stack.Screen name="Planet" component={Planet} />
      <Stack.Screen name="Health" component={Health} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Politics" component={Politcs} />
      <Stack.Screen name="Educational" component={Educational} />
    </Stack.Navigator>
  );
}
