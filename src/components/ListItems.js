import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItems = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;

  //  Check if condition exists in weatherType and if icon is defined
  const weatherIcon =
    weatherType[condition] && weatherType[condition].icon
      ? weatherType[condition].icon
      : "sun"; // Provide a fallback icon if necessary


  return (
    <View style={item}>
      <Feather name={weatherIcon} size={50} color={"white"} />
      <View >
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)} / ${Math.round(max)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateText: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});


export default ListItems;
