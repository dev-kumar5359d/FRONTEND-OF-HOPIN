import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Image 
} from "react-native";

// Main SearchScreen Component
const SearchScreen = ({ navigation }) => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  // Mock data for drivers
  const drivers = [
    {
      id: "1",
      name: "Bartek",
      age: 22,
      rating: 5.0,
      opinions: 44,
      vehicle: "Polna 2",
      destination: "Centralna 4",
      price: "$20",
    },
    {
      id: "2",
      name: "Tomek",
      age: 28,
      rating: 5.0,
      opinions: 44,
      vehicle: "Polna 2",
      destination: "Centralna 4",
      price: "$20",
    },
    {
      id: "3",
      name: "Anna",
      age: 30,
      rating: 4.8,
      opinions: 30,
      vehicle: "Toyota Camry",
      destination: "Main Street 5",
      price: "$25",
    },
  ];

  // Filter drivers based on the "To" location
  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.destination.toLowerCase().includes(toLocation.toLowerCase()) && 
      driver.vehicle.toLowerCase().includes(fromLocation.toLowerCase())
  );

  const renderDriverCard = ({ item }) => (
    <View style={styles.card}>
      <Image
//        source={require('./driver-placeholder.png')} // Replace with actual driver image
        style={styles.driverImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.driverName}>{item.name} ({item.age} years)</Text>
        <Text style={styles.rating}>⭐ {item.rating} ({item.opinions} opinions)</Text>
        <Text style={styles.location}>{item.vehicle} → {item.destination}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => alert(`Contacting ${item.name}`)}
      >
        <Text style={styles.contactButtonText}>Contact Driver</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Location Input */}
      <View style={styles.tripContainer}>
        <Text style={styles.title}>Your Trip</Text>
        <TextInput
          style={styles.input}
          placeholder="From location"
          value={fromLocation}
          onChangeText={(text) => setFromLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="To location"
          value={toLocation}
          onChangeText={(text) => setToLocation(text)}
        />
        <Text style={styles.dateTime}>Today, 11:30</Text>
      </View>

      {/* Driver List */}
      <Text style={styles.sectionTitle}>The best trips for you</Text>
      {filteredDrivers.length > 0 ? (
        <FlatList
          data={filteredDrivers}
          keyExtractor={(item) => item.id}
          renderItem={renderDriverCard}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.noDrivers}>No drivers found for this route.</Text>
      )}
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  tripContainer: {
    backgroundColor: "#FF6B6B",
    padding: 20,
    borderRadius: 15,
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    color: "#333",
  },
  dateTime: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
  },
  sectionTitle: {
    margin: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  noDrivers: {
    margin: 15,
    fontSize: 16,
    color: "#FF6B6B",
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: " #D3D3D3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {
    color: "#555",
    fontSize: 14,
  },
  location: {
    fontSize: 14,
    color: "#333",
  },
  price: {
    fontSize: 16,
    color: "#FF6B6B",
    fontWeight: "bold",
  },
  contactButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SearchScreen;
