import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from "../screens/RegisterScreen";

export type RouteParams = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerTitle: "Inscription"}} name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

