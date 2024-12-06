import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const players = [
  {
    name: "CJ BAXTER",
    alerts: 6,
    impacts: 82,
    image: "https://pbs.twimg.com/profile_images/1851305710958546944/quvNEDqr_400x400.jpg",
  },
  {
    name: "ANT HILL JR.",
    alerts: 4,
    impacts: 31,
    image: "https://static.hudl.com/users/prod/16700386_239d8e446c2f4e4397b374a746c8a442.jpg",
  },
  {
    name: "D. MOORE.",
    alerts: 2,
    impacts: 43,
    image: "https://texashsfootball.com/wp-content/uploads/2023/04/Cedric-benson.png",
  },
];

const BlitzApp: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://image.maxpreps.io/school-mascot/e/0/9/e095cff2-1a68-48bf-a8cb-7c85ea824e67.gif?version=637977130800000000&width=128&height=128&auto=webp&format=pjpg",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>LAKE TRAVIS FOOTBALL</Text>
      </View>

      {/* Alerts Header */}
      <View style={styles.alertsHeader}>
        <Text style={styles.alertsHeaderText}>Top 3 Players in Alerts</Text>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Player</Text>
        <Text style={styles.tableHeaderText}>Alerts</Text>
        <Text style={styles.tableHeaderText}>Impacts</Text>
      </View>

      {/* Players List */}
      <ScrollView>
        {players.map((player, index) => (
          <View key={index} style={styles.playerRow}>
            <View style={styles.playerInfoContainer}>
              <Image source={{ uri: player.image }} style={styles.playerImage} />
              <Text style={styles.playerName}>{player.name}</Text>
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
    paddingBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
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
    flex: 1,
    textAlign: "center",
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  playerInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  playerData: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    color: "#000000",
  },
});

export default BlitzApp;
