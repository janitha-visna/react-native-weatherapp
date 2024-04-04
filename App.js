import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Current"} component={CurrentWeather} />
        <Tab.Screen name={"upcoming weather"} component={UpcomingWeather} />
        <Tab.Screen name={"city"} component={City} />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 15,
  },
});
export default App;
