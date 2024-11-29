import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const teams = [
  { id: '0', tag: '0', name: 'ANTHONY HILL JR.', details: 'LB / 6\'3" / 235 lbs / 1L', image: 'https://dxa7m90h2v1am.cloudfront.net/images/2024/9/5/Hill_Anthony_2024_crop_ZQDp4.jpg?width=300' },
  { id: '1', tag: '0', name: 'DEANDRE MOORE JR.', details: 'WR / 6\'0" / 195 lbs / 1L', image: 'https://texaslonghorns.com/images/2024/9/5/Moore_DeAndre_2024_crop_Lgj3U.jpg'},
  { id: '2', tag: '3', name: 'QUINN EWERS', details: 'QB / 6\'2" / 195 lbs / 2L', image: 'https://texaslonghorns.com/images/2023/10/13/Ewers_Quinn_2023.png' },
  { id: '3', tag: '4', name: 'CJ BAXTER', details: 'RB / 6\'1" / 220 lbs / 1L', image: 'https://texaslonghorns.com/images/2023/10/12/Baxter_CJ-2023_ax9bd.png' },
  { id: '4', tag: '5', name: 'RYAN WINGO', details: 'WR / 6\'2" / 210 lbs / HS', image: 'https://texaslonghorns.com/images/2024/2/15/Wingo_Ryan-2024.jpg'},
  { id: '5', tag: '7', name: 'ISAIAH BOND', details: 'WR / 5\'11" / 180 lbs / TR', image: 'https://texaslonghorns.com/images/2024/2/15/Bond_Isaiah-2024.jpg' },
  { id: '6', tag: '16', name: 'MICHAEL TAAFFE', details: 'DB / 6\'0" / 195 lbs / 2L', image: 'https://dxa7m90h2v1am.cloudfront.net/images/2023/10/13/Taaffe_Michael_2023.png?width=300' },
];

const Report = () => {
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
        <Text style={styles.title}>SEARCH</Text>
        <Image
            source={{
                uri: "https://s3-alpha-sig.figma.com/img/9cd4/4ca0/cb5aa4a578a2576034af44f0874540dd?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRaW2yWCqjmih1TcvlOLC1i9YAvf4q7DucKs0nLwSEVNaiX956~lQpglh8W8XIMW6WBbaXEgdM5ViBWd5HWSk-3Bi6eWAAlvedd0CkFuq9UEnhpoUkiJJ1GOWNnt8Qt1Qd2wCgIfEuOqxd0-2BboOoTlnGztPQlv5NSlpYZGg3h5whkMO8xG4Rp5Sxl2wCJnovhzC-EcdTc9nBHrd3-DHoqDSlVr1022C-Dw6zgoUoKh0HMVo833UyPJIPRyLxjEYk9jVFTp5tGxisPFpRWXoneazVOqxh81sj9KDxHzzhBmV5gXonc4A1XOqqe5~rqk55U5SFfc9qNF42xeZ1wN0Q__",}}
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
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#C8102E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop:20,
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
  iconContainer: {
    position: 'absolute', // Absolute positioning for the icon.
    bottom: 5, // Adjust to move the icon near the bottom.
    right: 8, // Adjust to move the icon near the right.
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
});

export default Report;