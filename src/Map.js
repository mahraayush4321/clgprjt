import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.Map}
      initialRegion={{
        latitude: 29.21899581289376,
        longitude: 79.51249468635986,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({
  Map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    height: "75%",
  },
});
