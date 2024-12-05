import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const players = [
  {
    name: "CJ BAXTER",
    alerts: 6,
    impacts: 82,
    image: "https://texaslonghorns.com/images/2023/10/12/Baxter_CJ-2023_ax9bd.png",
  },
  {
    name: "ANT HILL JR.",
    alerts: 4,
    impacts: 31,
    image: "https://texaslonghorns.com/images/2024/9/5/Hill_Anthony_2024_crop_ZQDp4.jpg",
  },
  {
    name: "D. MOORE.",
    alerts: 2,
    impacts: 43,
    image: "https://dxa7m90h2v1am.cloudfront.net/images/2024/9/5/Moore_DeAndre_2024_crop_Lgj3U.jpg?width=300",
  },
];

const BlitzApp: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/9cd4/4ca0/cb5aa4a578a2576034af44f0874540dd?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRaW2yWCqjmih1TcvlOLC1i9YAvf4q7DucKs0nLwSEVNaiX956~lQpglh8W8XIMW6WBbaXEgdM5ViBWd5HWSk-3Bi6eWAAlvedd0CkFuq9UEnhpoUkiJJ1GOWNnt8Qt1Qd2wCgIfEuOqxd0-2BboOoTlnGztPQlv5NSlpYZGg3h5whkMO8xG4Rp5Sxl2wCJnovhzC-EcdTc9nBHrd3-DHoqDSlVr1022C-Dw6zgoUoKh0HMVo833UyPJIPRyLxjEYk9jVFTp5tGxisPFpRWXoneazVOqxh81sj9KDxHzzhBmV5gXonc4A1XOqqe5~rqk55U5SFfc9qNF42xeZ1wN0Q__",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>UT FOOTBALL</Text>
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
