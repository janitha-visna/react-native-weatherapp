import React from "react";
import { useState } from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Tabs from "./src/components/Tabs";
import Counter from "./src/demonstration/Counter";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"  />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default App;
