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
    rank: 4,
    name: 'CJ BAXTER',
    position: 'RB',
    height: "6'1",
    weight: '220 lbs',
    year: '1L',
    risk: 'HIGH',
    percentage: '95%',
    image: 'https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2ftexassports_com%2fimages%2f2023%2f10%2f12%2fBaxter_CJ-2023_ax9bd.png&type=webp',
  },
  {
    id: 4,
    rank: 7,
    name: 'ISAIAH BOND',
    position: 'WR',
    height: "5'11",
    weight: '180 lbs',
    year: 'TR',
    risk: 'MEDIUM',
    percentage: '68%',
    image: 'https://texaslonghorns.com/images/2024/9/5/Moore_DeAndre_2024_crop_Lgj3U.jpg',
  },
  {
    id: 5,
    rank: 12,
    name: 'QUIN EWERS',
    position: 'RB',
    height: "5'11",
    weight: '195 lbs',
    year: '1L',
    risk: 'MEDIUM',
    percentage: '60%',
    image: 'https://texaslonghorns.com/images/2023/10/13/Ewers_Quinn_2023.png',
  },
  {
    id: 6,
    rank: 5,
    name: 'RYAN WINGO',
    position: 'WR',
    height: "6'2",
    weight: '210 lbs',
    year: 'HS',
    risk: 'LOW',
    percentage: '20%',
    image: 'https://via.placeholder.com/50?text=RW',
  },
  {
    id: 7,
    rank: 16,
    name: 'MICHAEL TAFFEE',
    position: 'DB',
    height: "6'0",
    weight: '195 lbs',
    year: '2L',
    risk: 'LOW',
    percentage: '10%',
    image: 'https://dxa7m90h2v1am.cloudfront.net/images/2023/10/13/Taaffe_Michael_2023.png?width=300',
  },
  {
    id: 8,
    rank: 15,
    name: 'JORDAN WHITTINGTON',
    position: 'WR',
    height: "6'1",
    weight: '205 lbs',
    year: '2L',
    risk: 'LOW',
    percentage: '30%',
    image: 'https://via.placeholder.com/50?text=JW',
  },
  {
    id: 9,
    rank: 22,
    name: 'ETHAN BURKE',
    position: 'DL',
    height: "6'6",
    weight: '250 lbs',
    year: '2L',
    risk: 'LOW',
    percentage: '12%',
    image: 'https://texaslonghorns.com/images/2023/10/12/Baxter_CJ-2023_ax9bd.png',
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
    image: 'https://texaslonghorns.com/images/2024/2/15/Bond_Isaiah-2024.jpg',
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ACTIVE ROSTER REPORT</Text>
      </View>

      <Text style={styles.subtitle}>UT Austin Football Team</Text>

      <FlatList
        data={sortedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <Text style={styles.updatedText}>Last updated: 40s ago</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#d50000',
    padding: 12,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 24,
    marginBottom: 6,
    marginLeft: 24,
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
