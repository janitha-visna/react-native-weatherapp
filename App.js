import React from "react";

import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Tabs from "./src/components/Tabs";



const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;
