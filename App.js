import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null); // Initialize with null instead of an empty array
  const [lon, setLon] = useState(null); // Initialize with null instead of an empty array

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      //console data 
      console.log(data);
      setWeather(data);
    } catch (e) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        await fetchWeatherData();
      } catch (error) {
        setError("An error occurred while fetching location");
      } finally {
        setLoading(false); // Set loading to false once location data is fetched or an error occurs
      }
    })();
  }, [lat,lon]); // Empty dependency array to run only once on component mount

  console.log("Latitude:", lat); // Log latitude
  console.log("Longitude:", lon); // Log longitude

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
