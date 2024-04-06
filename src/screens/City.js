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

const City = () => {
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
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpeg")}
        style={imageLayout}
      >
        <View style={styles.overlay}>
          <Text style={[cityName, cityText]}>london</Text>
          <Text style={[countryName, cityText]}>uk</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={"user"}
              iconColor={"red"}
              bodyText={"8000"}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={"sunrise"}
              iconColor={"black"}
              bodyText={"10:46:58am"}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={"sunset"}
              iconColor={"black"}
              bodyText={"10:46:58am"}
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
