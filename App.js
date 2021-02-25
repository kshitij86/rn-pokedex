import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import PokeDetails from "./components/PokeDetails";
import About from "./components/About";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Pokedex"
          component={HomeScreen} 
          options={{
            title: "Pokedex",
            headerStyle: {
              backgroundColor: "grey"
            },
            headerTitleStyle: {
              fontSize: 30,
              textAlign: "center",
              color: "white",
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen
            name="PokeDetails"
            component={PokeDetails} 
            options={{
              title: "Details",
              headerStyle: {
                backgroundColor: "grey"
              },
              headerTitleStyle: {
                fontSize: 30,
                textAlign: "left",
                color: "white",
              },
            }} />
            <Stack.Screen
            name="AboutTheDev"
            component={About} 
            options={{
              title: "About The Developer",
              headerStyle: {
                backgroundColor: "grey"
              },
              headerTitleStyle: {
                fontSize: 30,
                textAlign: "left",
                color: "white",
              },
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;