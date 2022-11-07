import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { darkGreen } from "./Constants";

const Fields = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 5,
        backgroundColor: "rgb(220,220,220)",
        width: "50%",
        height: "8%",
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
        marginVertical: 7,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Fields;

const styles = StyleSheet.create({});
