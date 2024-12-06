import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const TeamsScreen = () => {
  const teams = [
    {
      id: '1',
      name: '2024–25 Varsity Team',
      players: [
        { id: '1', image: 'https://static.hudl.com/users/prod/16700386_239d8e446c2f4e4397b374a746c8a442.jpg' },
        { id: '2', image: 'https://pbs.twimg.com/profile_images/1851305710958546944/quvNEDqr_400x400.jpg' },
        { id: '3', image: 'https://www.crosstimbersgazette.com/crosstimbersgazette/wp-content/uploads/2018/09/Screen-Shot-2018-09-06-at-4.04.23-PM-1-e1536267956579.png' },
        { id: '4', image: 'https://texashsfootball.com/wp-content/uploads/2023/04/Cedric-benson.png' },
      ],
    },
  ];
  const renderTeam = ({ item }) => (
    <View style={styles.teamCard}>
      <Text style={styles.teamTitle}>{item.name}</Text>
      <View style={styles.playerContainer}>
        {item.players.map(player => (
          <Image
            key={player.id}
            source={{ uri: player.image }}
            style={styles.playerImage}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.manageButton}>
        <Text style={styles.manageText}>MANAGE TEAM</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TEAMS</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search Teams" />
        <Icon name="search" size={20} color="#000" />
      </View>
      <View>
        <FlatList
            data={teams}
            renderItem={renderTeam}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            style={{ flexShrink: 1 }}
        />
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD A TEAM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 50,
    paddingBottom: 20,
    color: '#FFFFFF',
    backgroundColor: '#DC011A',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D963',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    marginBottom: 16,
    marginTop: 16,
    marginHorizontal: 14,
    borderColor: '000000'
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 16,
    marginVertical: 16,
    marginHorizontal: 20,
    alignContent:'center', 
  },
  teamCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    borderWidth:1.5,
    marginBottom: 16,
    elevation: 2,
  },
  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  playerImage: {
    width: 55,
    height: 55,
    borderRadius: 100,
    marginRight: 32,
  },
  manageButton: {
    alignSelf: 'flex-end',
  },
  manageText: {
    marginTop: 16,
    color: '#000000',
    opacity: 0.73,
    fontWeight: 'bold',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#ECEAEA',
    borderColor: '#C61529',
    borderWidth: 2.5,
    marginHorizontal:80,
    marginVertical:12,
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
});
export default TeamsScreen;