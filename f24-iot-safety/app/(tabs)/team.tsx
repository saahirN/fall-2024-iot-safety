import React from "react";
import { StyleSheet, Image } from "react-native";

const BlitzZoomOut = () => {
  return (
    <Image
      source={require("./background.png")} // Replace with your image path
      style={styles.image}
      // resizeMode="contain" // Ensures the image fits within the scaled dimensions
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "95%", // Make the image slightly larger than the screen width
    height: "70%", // Make the image slightly larger than the screen height
    alignSelf: "center", // Center the image
  },
});

export default BlitzZoomOut;
