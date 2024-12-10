import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const data = [
  {
    id: 1,
    rank: '04',
    name: 'CARTER BUCK',
    position: 'RB',
    height: "6'1",
    weight: '220 lbs',
    year: '1L',
    risk: 'HIGH',
    percentage: '95%',
    image: 'https://pbs.twimg.com/profile_images/1851305710958546944/quvNEDqr_400x400.jpg',
  },
  {
    id: 4,
    rank: '07',
    name: 'CHASTON DITTA',
    position: 'WR',
    height: "5'11",
    weight: '180 lbs',
    year: 'TR',
    risk: 'MEDIUM',
    percentage: '68%',
    image: 'https://www.amarillo.com/gcdn/presto/2023/01/18/NAGN/438478cc-a329-4e79-96d6-d7eb3e83df34-20230116_Armando_Lujan_0011.JPG?crop=3209,1806,x0,y481&width=660&height=371&format=pjpg&auto=webp',
  },
  {
    id: 5,
    rank: 12,
    name: 'AIDEN ARCHER',
    position: 'RB',
    height: "5'11",
    weight: '195 lbs',
    year: '1L',
    risk: 'MEDIUM',
    percentage: '60%',
    image: 'https://static.hudl.com/users/prod/16700386_239d8e446c2f4e4397b374a746c8a442.jpg',
  },
  {
    id: 6,
    rank: '05',
    name: 'COOPER WEBB',
    position: 'WR',
    height: "6'2",
    weight: '210 lbs',
    year: 'HS',
    risk: 'LOW',
    percentage: '20%',
    image: 'https://www.crosstimbersgazette.com/crosstimbersgazette/wp-content/uploads/2018/09/Screen-Shot-2018-09-06-at-4.04.23-PM-1-e1536267956579.png',
  },
  {
    id: 7,
    rank: 16,
    name: 'VANN HOPPING',
    position: 'DB',
    height: "6'0",
    weight: '195 lbs',
    year: '2L',
    risk: 'LOW',
    percentage: '10%',
    image: 'https://texashsfootball.com/wp-content/uploads/2023/04/Cedric-benson.png',
  },
  {
    id: 8,
    rank: 15,
    name: 'EASTON AIRD',
    position: 'WR',
    height: "6'1",
    weight: '205 lbs',
    year: '2L',
    risk: 'LOW',
    percentage: '30%',
    image: 'https://www.statesman.com/gcdn/authoring/authoring-images/2023/12/10/NAAS/71867742007-westlake-v-north-shore-football-playoff-sed-009.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp',
  },
  {
    id: 9,
    rank: 22,
    name: 'MERRICK KAYS',
    position: 'DL',
    height: "6'6",
    weight: '250 lbs',
    year: '2L',
    risk: 'LOW',
    percentage: '12%',
    image: 'https://www.crosstimbersgazette.com/crosstimbersgazette/wp-content/uploads/2018/09/Screen-Shot-2018-09-06-at-4.04.23-PM.png',
  },
  {
    id: 10,
    rank: 18,
    name: 'JONTAY COOK',
    position: 'WR',
    height: "6'0",
    weight: '185 lbs',
    year: 'FR',
    risk: 'LOW',
    percentage: '25%',
    image: 'https://www.oklahoman.com/gcdn/authoring/authoring-images/2024/01/03/NOKL/72101233007-all-state-4.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp',
  },
];

const sortedData = data.sort((a, b) => {
  const riskLevels = { HIGH: 3, MEDIUM: 2, LOW: 1 };
  const riskComparison = riskLevels[b.risk] - riskLevels[a.risk];
  if (riskComparison === 0) {
    return b.rank - a.rank;
  }
  return riskComparison;
});

const RosterReport = () => {
  const getBorderColor = (risk) => {
    switch (risk) {
      case 'HIGH':
        return '#ff6a6a'; // Red for high risk
      case 'MEDIUM':
        return '#ffc107'; // Yellow for medium risk
      case 'LOW':
        return '#4caf50'; // Green for low risk
      default:
        return '#ddd';
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      {/* Player Image and Number */}
      <View style={[styles.imageContainer, { borderColor: getBorderColor(item.risk) }]}>
        <Text style={styles.playerNumber}>{item.rank}</Text>
        <Image source={{ uri: item.image }} style={styles.playerImage} />
      </View>

      {/* Player Details */}
      <View style={styles.playerDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          {item.position} / {item.height} / {item.weight} / {item.year}
        </Text>
      </View>

      {/* Risk Indicator */}
      <View style={styles.riskIndicator}>
        <Text style={styles.percentage}>{item.percentage}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://image.maxpreps.io/school-mascot/e/0/9/e095cff2-1a68-48bf-a8cb-7c85ea824e67.gif?version=637977130800000000&width=128&height=128&auto=webp&format=pjpg",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>LAKE TRAVIS FOOTBALL</Text>
      </View>

      <Text style={styles.subtitle}>Lake Travis Football Team</Text>

      <FlatList
        data={sortedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <Text style={styles.updatedText}>Last updated: 40s ago</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#d50000',
    padding: 12,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    alignContent: 'center', 
    fontSize: 30,
    marginTop: 24,
    marginBottom: 6,
    marginLeft: 18,
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
  updatedText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'right',
    marginHorizontal: 24,
    marginBottom: 6,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 35, // Adjust to ensure the border wraps the circle image
    padding: 5, // Space between border and image
    marginRight: 12,
  },
  playerNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  playerDetails: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  details: {
    fontSize: 14,
    color: '#888',
  },
  riskIndicator: {
    alignItems: 'center',
  },
  percentage: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default RosterReport;
