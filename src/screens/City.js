import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpeg")}
        style={styles.imageLayout}
      >
        <View style={styles.overlay}>
          <Text style={[styles.cityName, styles.cityText]}>london</Text>
          <Text style={[styles.countryName, styles.cityText]}>uk</Text>
          <View style={styles.populationWrapper}>
            <Feather name={"user"} size={50} color={"red"} />
            <Text style={styles.populationText}>8000</Text>
          </View>
          <View style={styles.riseSetWrapper}>
            <Feather name="sunrise" size={50} color="black" />
            <Text style={styles.riseSetText}>10:46:58am</Text>
            <Feather name="sunset" size={50} color="black" />
            <Text style={styles.riseSetText}>17:28:15pm</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 40,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",

    fontWeight: "bold",
    color: "black",
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
export default City;