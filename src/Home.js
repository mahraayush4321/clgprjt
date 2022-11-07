import { Text, View } from "react-native";
import Background from "./Background";
import React from "react";
import Btn from "./Btn";
import { darkGreen } from "./Constants";
import Mainscreen from "./Mainscreen";

const Home = (props) => {
  return (
    <Background>
      <View
        style={{ marginHorizontal: 80, marginVertical: 370, marginBottom: 5 }}
      >
        <Text
          style={{
            fontSize: 29,
            color: "blue",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          KING OF PIRATES
        </Text>
      </View>
      <Btn
        bgColor={darkGreen}
        textColor="white"
        btnLabel="Login"
        Press={() => props.navigation.navigate("Login")}
      />
      <Btn
        bgColor="red"
        textColor={darkGreen}
        btnLabel="Sign up"
        Press={() => props.navigation.navigate("Signup")}
      />
    </Background>
  );
};

export default Home;
