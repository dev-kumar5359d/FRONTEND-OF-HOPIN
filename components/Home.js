import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavigation from './BottomNavigation'; // Import the BottomNavigation component

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hopin!</Text>
      <Text style={styles.optionText}>What would you like to do?</Text>

      <View style={styles.buttonContainer}>
        {/* Updated Give a Ride to navigate to GiveRide screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GiveRide')} // Navigate to GiveRide screen
        >
          <Text style={styles.buttonText}>Give a Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Search')} // Navigate to Search screen
        >
          <Text style={styles.buttonText}>Book Your Ride</Text>
        </TouchableOpacity>
      </View>

      {/* Pass navigation prop to BottomNavigation */}
      <BottomNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Light background for a clean look
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'grey', // Dark text color for better readability
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#555', // Softer color for subtitle
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF6B6B', // Light red color for the button
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '80%', // Make buttons wider
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3, // Subtle shadow for a modern touch
    elevation: 3, // Elevation for Android
  },
  buttonText: {
    color: '#fff', // White text for contrast
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
