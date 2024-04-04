import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>FEELS like 5</Text>
        <RowText
          messageOne={"high:8"}
          messageTwo={"low:6"}
          containerStyles={styles.highLowWrapper}
          messageOneStyle={styles.highLow}
          messageTwoStyle={styles.highLow}
        />
      </View>

      <RowText
        messageOne={"its sunny"}
        messageTwo={"its perfect t shirt weather "}
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
    marginTop: 40,
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
