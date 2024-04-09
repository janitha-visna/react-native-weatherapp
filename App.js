import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
      } catch (error) {
        setError("An error occurred while fetching location");
      } finally {
        setLoading(false); // Set loading to false once location data is fetched or an error occurs
      }
    })();
  }, []);

  if (Location) {
    console.log(location);
  }

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
