import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { darkGreen } from "./Constants";
import Btn from "./Btn";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Mainscreen = (props) => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 30,
          paddingVertical: 100,
          paddingHorizontal: 50,
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        CROSS
      </Text>
      <TouchableOpacity>
        <View>
          <Image
            source={require("../assets/yo.jpg")}
            style={{
              height: "60%",
              width: "50%",
              marginHorizontal: 20,
              bottom: 65,
              resizeMode: "contain",
              borderRadius: 20,
            }}
          />
          <GooglePlacesAutocomplete
            style={{
              container: {
                flex: 0,
              },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            placeholder="Where From?"
            debounce={400}
            query={{
              key: "GOOGLE_MAPS_APIKEY",
              language: "en",
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontStyle: "italic",
              paddingHorizontal: 35,
              bottom: 189,
              color: "red",
              fontWeight: "bold",
            }}
          >
            Lets get a ride
          </Text>
        </View>

        <View>
          <Btn
            bgColor="skyblue"
            textColor={darkGreen}
            btnLabel="Mapscreen"
            Press={() => props.navigation.navigate("Mapscreen")}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({});
