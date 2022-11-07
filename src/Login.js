import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Background from "./Background";
import Fields from "./Fields";
import { darkGreen } from "./Constants";
import Btn from "./Btn";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 300 }}>
        <Text
          style={{
            color: "yellow",
            fontSize: 35,
            fontWeight: "bold",
            marginVertical: 55,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 500,
            borderTopLeftRadius: 250,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontStyle: "italic",
              marginVertical: 10,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            login in into your account
          </Text>
          <Fields placeholder="email" keyboardType="email-address" />
          <Fields placeholder="password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "50%",
              paddingRight: 10,
              marginLeft: 20,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                color: darkGreen,
              }}
            >
              forgot password?
            </Text>
          </View>
          <Btn
            bgColor={darkGreen}
            textColor="white"
            btnLabel="Login"
            Press={() => alert("Logged in")}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{ fontSize: 15, fontStyle: "italic", fontWeight: "bold" }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontStyle: "italic",
                  fontWeight: "bold",
                  marginHorizontal: 6,
                  paddingRight: 5,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
