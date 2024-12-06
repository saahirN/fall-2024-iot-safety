import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const teams = [
  { id: '0', tag: '00', name: 'CARTER BUCK', details: 'LB / 6\'3" / 235 lbs / 1L', image: 'https://s3media.247sports.com/Uploads/Assets/674/242/12242674.jpg' },
  { id: '1', tag: '00', name: 'CHASTON DITTA', details: 'WR / 6\'0" / 195 lbs / 1L', image: 'https://s3media.247sports.com/Uploads/Assets/929/416/12416929.jpg' },
  { id: '2', tag: '03', name: 'AIDEN ARCHER', details: 'QB / 6\'2" / 195 lbs / 2L', image: 'https://static.hudl.com/users/prod/16700386_239d8e446c2f4e4397b374a746c8a442.jpg' },
  { id: '3', tag: '04', name: 'COOPER WEBB', details: 'RB / 6\'1" / 220 lbs / 1L', image: 'https://pbs.twimg.com/profile_images/1851305710958546944/quvNEDqr_400x400.jpg' },
  { id: '4', tag: '05', name: 'VANN HOPPING', details: 'WR / 6\'2" / 210 lbs / HS', image: 'https://www.crosstimbersgazette.com/crosstimbersgazette/wp-content/uploads/2018/09/Screen-Shot-2018-09-06-at-4.04.23-PM-1-e1536267956579.png' },
  { id: '5', tag: '07', name: 'EASTON AIRD', details: 'WR / 5\'11" / 180 lbs / TR', image: 'https://www.amarillo.com/gcdn/presto/2023/01/18/NAGN/438478cc-a329-4e79-96d6-d7eb3e83df34-20230116_Armando_Lujan_0011.JPG?crop=3209,1806,x0,y481&width=660&height=371&format=pjpg&auto=webp' },
  { id: '6', tag: '16', name: 'MERRICK KAYS', details: 'DB / 6\'0" / 195 lbs / 2L', image: 'https://texashsfootball.com/wp-content/uploads/2023/04/Cedric-benson.png' },
];

const Report = () => {
  const sendNotification = () => {
    Alert.alert(
      'Concusion Detected',
      'CJ BAXTER RECEIVED A HARD HIT',
      [{ text: 'OK', onPress: () => console.log('Notification Acknowledged') }]
    );
  };

  const renderTeam = ({ item }) => (
    <View style={styles.teamRow}>
      <Text style={styles.playerNumber}>{item.tag}</Text>
      <Image source={{ uri: item.image }} style={styles.playerImage} />
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.playerDetails}>{item.details}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.header}>
          <Text style={styles.title}>SEARCH</Text>
          <TouchableOpacity onPress={sendNotification} style={styles.notificationButton}>
            <Icon name="bell" size={24} color="#E34A1B" borderColor="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: 'https://image.maxpreps.io/school-mascot/e/0/9/e095cff2-1a68-48bf-a8cb-7c85ea824e67.gif?version=637977130800000000&width=128&height=128&auto=webp&format=pjpg',
          }}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>2024–25 Varsity Team</Text>
        <View style={styles.iconContainer}>
          <Icon name="caret-down" size={24} color="#000" />
        </View>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Icon name="search" size={20} color="#000" />
      </View>
      <FlatList
        data={teams}
        renderItem={renderTeam}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  notificationButton: {
    padding: 8,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D963',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    marginHorizontal: 14,
    borderColor: '#000',
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  playerNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  playerDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default Report;
