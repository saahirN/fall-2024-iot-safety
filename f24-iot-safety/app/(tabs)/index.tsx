import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const players = [
  {
    name: "CJ BAXTER",
    alerts: 6,
    impacts: 82,
    image: "https://texaslonghorns.com/images/2023/10/12/Baxter_CJ-2023_ax9bd.png", // Replace with actual image URLs
  },
  {
    name: "ANTHONY HILL JR.",
    alerts: 4,
    impacts: 31,
    image: "https://texaslonghorns.com/images/2024/9/5/Hill_Anthony_2024_crop_ZQDp4.jpg",
  },
  {
    name: "DEANDRE MOORE JR.",
    alerts: 2,
    impacts: 43,
    image: "https://dxa7m90h2v1am.cloudfront.net/images/2024/9/5/Moore_DeAndre_2024_crop_Lgj3U.jpg?width=300",
  },
];

const BlitzApp: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/9cd4/4ca0/cb5aa4a578a2576034af44f0874540dd?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRaW2yWCqjmih1TcvlOLC1i9YAvf4q7DucKs0nLwSEVNaiX956~lQpglh8W8XIMW6WBbaXEgdM5ViBWd5HWSk-3Bi6eWAAlvedd0CkFuq9UEnhpoUkiJJ1GOWNnt8Qt1Qd2wCgIfEuOqxd0-2BboOoTlnGztPQlv5NSlpYZGg3h5whkMO8xG4Rp5Sxl2wCJnovhzC-EcdTc9nBHrd3-DHoqDSlVr1022C-Dw6zgoUoKh0HMVo833UyPJIPRyLxjEYk9jVFTp5tGxisPFpRWXoneazVOqxh81sj9KDxHzzhBmV5gXonc4A1XOqqe5~rqk55U5SFfc9qNF42xeZ1wN0Q__",
          }} // Replace with actual logo URL
          style={styles.logo}
        />
        <Text style={styles.title}>UT FOOTBALL</Text>
      </View>

      <View style={styles.alertsHeader}>
        <Text style={styles.alertsHeaderText}>Top 3 Players in Alerts</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Player</Text>
        <Text style={styles.tableHeaderText}>Alerts</Text>
        <Text style={styles.tableHeaderText}>Impacts</Text>
      </View>

      <ScrollView>
        {players.map((player, index) => (
          <View key={index} style={styles.playerRow}>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.name}</Text>
              <Image
                source={{ uri: player.image }}
                style={styles.playerImage}
              />
            </View>
            <Text style={styles.playerData}>{player.alerts}</Text>
            <Text style={styles.playerData}>{player.impacts}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  banner: {
    alignItems: "center",
    backgroundColor: "#DC011A",
    paddingTop: 50,
    borderTopColor: "red",
    //borderTopWidth: 100,
    //borderBottomColor: "white",
    //borderBottomWidth: 100,
    paddingBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 1000,
    marginRight: 10,
    borderWidth: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  alertsHeader: {
    backgroundColor: "#D3D3D3",
    padding: 10,
  },
  alertsHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    backgroundColor: "#FFFFFF",
  },
  tableHeaderText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000000",
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 45,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  playerInfo: {
    flexDirection: "column",
    alignItems: "center",
    flex: 2
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#C8102E",
  },
  playerName: {
    fontSize: 14,
    textAlign: "center", 
    fontWeight: "bold",
    color: "#000000",
  },
  playerData: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center", 
    color: "#000000",
    flex: 1
  },
});

export default BlitzApp;
