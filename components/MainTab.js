// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/Home';
import YourRideScreen from './components/YourRide';
import ProfileScreen from './components/Profile';
import SearchScreen from './components/Search';
import InboxScreen from './components/Inbox';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Your Ride') {
            iconName = 'car';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Inbox') {
            iconName = 'mail';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Your Ride" component={YourRideScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
    </Tab.Navigator>
  );
}
