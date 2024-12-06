import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      <Tabs.Screen
        name="team"
        options={{
          title: 'Team',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <Ionicons name="document-text-outline" size={24} color={color} />
          ),
        }}
      />
      { <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      /> }
      <Tabs.Screen
        name="roster"
        options={{
          title: 'Roster',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
            <AntDesign name="book" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}












// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// const PlayerReport: React.FC = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Player Report</Text>
//       </View>

//       {/* Player Data Table */}
//       <View style={styles.table}>
//         <View style={styles.tableHeader}>
//           <Text style={styles.tableHeaderText}>Player</Text>
//           <Text style={styles.tableHeaderText}>Position</Text>
//           <Text style={styles.tableHeaderText}>Score</Text>
//         </View>
//         <PlayerRow player="#1" position="WR" score="95" />
//         <PlayerRow player="#2" position="QB" score="93" />
//         <PlayerRow player="#3" position="DB" score="85" />
//         <PlayerRow player="#4" position="WR" score="60" />
//       </View>
//     </ScrollView>
//   );
// };

// // Component to render each row in the player report
// type PlayerRowProps = {
//   player: string;
//   position: string;
//   score: string;
// };

// const PlayerRow: React.FC<PlayerRowProps> = ({ player, position, score }) => (
//   <View style={styles.tableRow}>
//     <Text style={styles.tableData}>{player}</Text>
//     <Text style={styles.tableData}>{position}</Text>
//     <Text style={styles.tableData}>{score}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   table: {
//     marginTop: 20,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   tableHeaderText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//     textAlign: 'center',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   tableData: {
//     fontSize: 16,
//     flex: 1,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default PlayerReport;
