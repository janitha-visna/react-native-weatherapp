import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [newcount, setNewCount] = useState(0);

  useEffect(() => {
    console.log("cout is changes", count);
  },[count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {"count:" + count} </Text>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setCount(count + 1);
          
        }}
      />
      <Button
        color={"green"}
        title={"desrease the count"}
        onPress={() => {
          setCount(count - 1);
          
        }}
      />
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setNewCount(newcount + 1);
          
        }}
      />
      <Button
        color={"green"}
        title={"desrease the count"}
        onPress={() => {
          setNewCount(newcount - 1);
          
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    marginTop: 40,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});
export default Counter;
