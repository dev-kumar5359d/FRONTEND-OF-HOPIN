import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const GiveRideScreen = ({ navigation }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [seats, setSeats] = useState('');
  const [charge, setCharge] = useState('');

  const calculateCharge = () => {
    const baseRatePerKm = 50;
    const estimatedDistance = 10; // Assume a fixed 10 km for simplicity
    const totalCharge = seats * baseRatePerKm * estimatedDistance;
    setCharge(totalCharge);
  };

  const uploadRide = () => {
    if (!from || !to || !seats || !charge) {
      Alert.alert('Incomplete Details', 'Please fill in all details and calculate the charge before uploading.');
      return;
    }

    // Pass the ride details to YourRide screen and navigate
    navigation.navigate('YourRide', { from, to, seats, charge });

    // Clear fields after uploading
    setFrom('');
    setTo('');
    setSeats('');
    setCharge('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give a Ride</Text>

      <TextInput
        style={styles.input}
        placeholder="From"
        value={from}
        onChangeText={(text) => setFrom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="To"
        value={to}
        onChangeText={(text) => setTo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Seats"
        value={seats}
        keyboardType="numeric"
        onChangeText={(text) => setSeats(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calculateCharge}>
        <Text style={styles.buttonText}>Calculate Charge</Text>
      </TouchableOpacity>

      {charge !== '' && (
        <Text style={styles.resultText}>Total Charge: ₹{charge}</Text>
      )}

      <TouchableOpacity style={styles.uploadButton} onPress={uploadRide}>
        <Text style={styles.buttonText}>Upload Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#4CAF50', // Green for the upload button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
  },
});

export default GiveRideScreen;
