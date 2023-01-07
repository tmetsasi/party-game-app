import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { HomeScreen } from "./frontend/HomeScreen";
import { GameScreen } from "./frontend/GameScreen";
import { SettingsScreen } from "./frontend/SettingsScreen";
import { ExampleGame } from "./frontend/firstGame/ExampleGame";
import { SecondScreen } from "./frontend/firstGame/Second";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Koti' component={HomeScreen} />
        <Stack.Screen name='Pelivalikko' component={GameScreen} />
        <Stack.Screen name='Asetukset' component={SettingsScreen} />
        <Stack.Screen name='Esimerkkipeli' component={ExampleGame} />
        <Stack.Screen name="Kakkosnäyttö" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;