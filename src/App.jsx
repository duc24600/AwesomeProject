/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react"
import {
  Text,
  View
} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import Liquidations from "./screens/Liquidations";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Config from "react-native-config";

function App() {
  const HOST = Config.SM_HOST;
  const ENDPOINT = Config.SM_API_ENDPOINT;
  console.log(HOST);
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Liquidations} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App