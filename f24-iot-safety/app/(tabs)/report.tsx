import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// import BlitzRosterReport from './screens/BlitzRosterReport';
// import NewPage from './screens/NewPage';
// import PlayerReport from './screens/PlayerReport'; // Import the new Player Report screen


const Tab = createBottomTabNavigator();


const App: React.FC = () => {
 return (
   <NavigationContainer>
     <Tab.Navigator
       screenOptions={({ route }) => ({
         headerShown: false,
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;


           if (route.name === 'Roster Report') {
             iconName = focused ? 'list-circle' : 'list-circle-outline';
           } else if (route.name === 'New Page') {
             iconName = focused ? 'add-circle' : 'add-circle-outline';
           } else if (route.name === 'Player Report') {
             iconName = focused ? 'person' : 'person-outline';
           }


           return <Ionicons name={iconName as any} size={size} color={color} />;
         },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
       })}
     >
       {/* <Tab.Screen name="Roster Report" component={BlitzRosterReport} />
       <Tab.Screen name="New Page" component={NewPage} />
       <Tab.Screen name="Player Report" component={PlayerReport} /> */}
     </Tab.Navigator>
   </NavigationContainer>
 );
};


export default App;