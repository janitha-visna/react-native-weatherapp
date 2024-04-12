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
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageLayout,
  } = styles;

  //const {  country, population, sunrise, sunset } = weatherData;
    const name = weatherData?.name ?? "Unknown City";
    const country = weatherData?.country ?? "Unknown Country";
    const population = weatherData?.population ?? "Unknown Population";
    const sunrise = weatherData?.sunrise ?? "Unknown Sunrise";
    const sunset = weatherData?.sunset ?? "Unknown Sunset";
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpeg")}
        style={imageLayout}
      >
        <View style={styles.overlay}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={"user"}
              iconColor={"red"}
              bodyText={`populaation: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={"sunrise"}
              iconColor={"black"}
              bodyText={moment(sunrise).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={"sunset"}
              iconColor={"black"}
              bodyText={moment(sunset).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: "space-around",
    margin: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "black",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default City;
