import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  
  const [loading,error,weather] = useGetWeather()
  console.log(loading,error,weather)

  // console.log("Latitude:", lat); // Log latitude
  // console.log("Longitude:", lon); // Log longitude

  // if (weather) {
  //   console.log(weather);
  // }

  return (
    <NavigationContainer>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <Tabs />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
