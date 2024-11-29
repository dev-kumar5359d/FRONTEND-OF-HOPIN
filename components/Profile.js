import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal, Button, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: 'DEV CHAUHAN',
    email: 'devc17745@gmail.com',
    phone: '+91 9105468231',
    profilePicture: 'https://via.placeholder.com/150',
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newProfilePicture, setNewProfilePicture] = useState(user.profilePicture);

  const rideHistory = [
    { date: 'Oct 15, 2024', from: 'Location A', to: 'Location B', price: '$10' },
    { date: 'Oct 12, 2024', from: 'Location C', to: 'Location D', price: '$8' },
  ];

  const handleSaveChanges = () => {
    setUser({
      ...user,
      name: newName,
      profilePicture: newProfilePicture,
    });
    setIsEditMode(false);
  };

  const handleTakePhoto = () => {
    launchCamera(
      { mediaType: 'photo', saveToPhotos: true },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'User cancelled taking photo.');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
        } else if (response.assets) {
          setNewProfilePicture(response.assets[0].uri); // Update with photo URI
        }
      }
    );
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(
      { mediaType: 'photo' },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'User cancelled picking image.');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
        } else if (response.assets) {
          setNewProfilePicture(response.assets[0].uri); // Update with library image URI
        }
      }
    );
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel",
        },
        {
          text: "Log Out",
          onPress: () => {
            navigation.navigate('LoginScreen'); // Use 'LoginScreen' here (ensure the name matches exactly)
          },
          style: "destructive",
        }
      ],
      { cancelable: false }
    );
  };

  const handleTextSender = (sender) => {
    Alert.alert(`Start a conversation with ${sender}`);
    // Add logic to start a conversation (can be a new screen or modal)
  };

  const handleViewSenderProfile = (sender) => {
    Alert.alert(`View profile of ${sender}`);
    // Add logic to navigate to the sender's profile screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{ uri: newProfilePicture }} style={styles.profilePic} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>

        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditMode(true)}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rideHistorySection}>
        <Text style={styles.sectionTitle}>Your Ride History</Text>
        {rideHistory.map((ride, index) => (
          <View key={index} style={styles.rideHistoryItem}>
            <Text style={styles.rideText}>{ride.date}</Text>
            <Text style={styles.rideText}>From: {ride.from}</Text>
            <Text style={styles.rideText}>To: {ride.to}</Text>
            <Text style={styles.rideText}>Price: {ride.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton} onPress={handleLogout}>
          <Text style={styles.settingsText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.messageSection}>
        <Text style={styles.sectionTitle}>Inbox</Text>
        <TouchableOpacity onPress={() => handleTextSender('Sender Name')}>
          <Text style={styles.senderText}>Text Sender</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleViewSenderProfile('Sender Name')}>
          <Text style={styles.senderText}>View Sender Profile</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isEditMode} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={(text) => setNewName(text)}
              placeholder="Enter new name"
            />
            <View style={styles.photoButtons}>
              <Button title="Take Photo" onPress={handleTakePhoto} color='#FF6B6B' />
              <Button title="Import from Library" onPress={handleChoosePhoto} color='#FF6B6B' />
            </View>
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={handleSaveChanges} color='#FF6B6B' />
              <Button title="Cancel" onPress={() => setIsEditMode(false)} color='#FF6B6B' />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#777',
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editText: {
    color: '#FFF',
    fontSize: 16,
  },
  rideHistorySection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  rideHistoryItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  rideText: {
    fontSize: 16,
  },
  settingsSection: {
    marginBottom: 30,
  },
  settingsButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  settingsText: {
    fontSize: 16,
    color: '#0B3D91',
  },
  messageSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  senderText: {
    fontSize: 16,
    color: '#0B3D91',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  photoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  modalButtons: {
    width: '100%',
  },
});

export default ProfileScreen;
