import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Feather';
const TeamsScreen = () => {
  return (
    <LinearGradient
      colors={["#7C0D1A", "#000000"]} // Red to black gradient
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("./BlitzLogo.png")} // Update this path to your image
          style={styles.logo}
          resizeMode="contain" // Ensures the image scales correctly
        />
        <Text style={styles.subtitle}>WHERE SAFETY MEETS STRATEGY</Text>

        <TouchableOpacity style={styles.buttonSignIn}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonJoinNow}>
          <Text style={styles.buttonText}>JOIN NOW</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical:230,
    paddingHorizontal:25,
    paddingVertical:10, 
    borderRadius:25,
    backgroundColor:"#580d15"
  },
  logo: {
    width: 150, // Set appropriate width for your image
    height: 80, // Set appropriate height for your image
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    marginTop: 2,
    marginBottom: 30,
    textAlign: "center",
  },
  buttonSignIn: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 75,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#FFFAFA",
  },
  buttonJoinNow: {
    backgroundColor: "#E3E3E37A", // Light grey for the second button
    paddingVertical: 12,
    paddingHorizontal: 65,
    marginBottom:20,
    borderRadius: 25,
    borderColor: "#FFFAFA",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
export default TeamsScreen;