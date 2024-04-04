import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyle,
    messageTwoStyle,
  } = props;

  return (
    <View style={containerStyles}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
