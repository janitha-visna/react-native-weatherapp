import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>FEELS like 5</Text>
        <RowText
          messageOne={"high:8"}
          messageTwo={"low:6"}
          containerStyles={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>

      <RowText
        messageOne={"its sunny"}
        messageTwo={weatherType['Thunderstorm'].message}
        containerStyles={styles.bodyWrapper}
        messageOneStyle={styles.description}
        messageTwoStyle={styles.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    
    backgroundColor: "pink",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
