const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AboutUsScreen from "./screens/AboutUsScreen";
import AboutUsScreenTeam from "./screens/AboutUsScreenTeam";
import AboutUsScreenClient from "./screens/AboutUsScreenClient";
import AboutUsScreenExpert from "./screens/AboutUsScreenExpert";
import AboutUsScreenDevice from "./screens/AboutUsScreenDevice";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AboutUsScreen"
              component={AboutUsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUsScreenTeam"
              component={AboutUsScreenTeam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUsScreenClient"
              component={AboutUsScreenClient}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUsScreenExpert"
              component={AboutUsScreenExpert}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUsScreenDevice"
              component={AboutUsScreenDevice}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
