import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  btnlabel,
} from "react-native";
import React from "react";

const Btn = ({ bgColor, btnLabel, textColor, Press }) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 350,
        paddingVertical: 5,
        marginHorizontal: 15,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
