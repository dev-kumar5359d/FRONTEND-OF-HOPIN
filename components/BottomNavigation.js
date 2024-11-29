import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using FontAwesome icons

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Home')} // Navigate to Home screen
      >
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Search')} // Navigate to Search screen
      >
        <FontAwesome name="search" size={24} color="black" />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('YourRide')} // Navigate to Your Ride screen
      >
        <FontAwesome name="car" size={24} color="black" />
        <Text style={styles.navText}>Your Ride</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Inbox')} // Navigate to Inbox screen
      >
        <FontAwesome name="envelope" size={24} color="black" />
        <Text style={styles.navText}>Inbox</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Profile')} // Navigate to Profile screen
      >
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavigation;
