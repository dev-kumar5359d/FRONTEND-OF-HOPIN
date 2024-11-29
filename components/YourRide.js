import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YourRideScreen = ({ route }) => {
  // Extract ride details passed from GiveRideScreen via route.params
  const { from, to, seats, charge } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Ride Details</Text>

      {from && to && seats && charge ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>From: {from}</Text>
          <Text style={styles.detailText}>To: {to}</Text>
          <Text style={styles.detailText}>Seats Available: {seats}</Text>
          <Text style={styles.detailText}>Total Charge: ₹{charge}</Text>
        </View>
      ) : (
        <Text style={styles.noDetailsText}>No ride details available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  detailText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  noDetailsText: {
    fontSize: 18,
    color: '#999',
  },
});

export default YourRideScreen;
