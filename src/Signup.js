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

const Signup = (props) => {
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
          Register
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
              fontStyle: "italic",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Create a new account
          </Text>
          <Fields placeholder="First Name" />
          <Fields placeholder="Last Name" />
          <Fields placeholder="Contact number" keyboardType={"number"} />
          <Fields placeholder="password" secureTextEntry={true} />
          <Fields placeholder="Confirm password" secureTextEntry={true} />

          <View
            style={{
              alignItems: "flex-end",
              width: "50%",
              paddingRight: 10,
              marginLeft: 20,
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                color: darkGreen,
                marginLeft: 60,
              }}
            >
              By signing in you accept our terms and conditions
            </Text>
          </View>
          <Btn
            bgColor={darkGreen}
            textColor="white"
            btnLabel="Signup"
            Press={() => alert("Account Created")}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{ fontSize: 15, fontStyle: "italic", fontWeight: "bold" }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Mainscreen")}
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
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
