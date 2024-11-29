import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const InboxScreen = ({ navigation }) => {
  // Sample data for inbox messages
  const messages = [
    { id: '1', sender: 'DEV CHAUHAN', message: 'Hey! Is the ride still available?' },
    { id: '2', sender: 'DEV CHAUHAN', message: 'Can we adjust the timing for our trip?' },
    { id: '3', sender: 'DEV CHAUHAN', message: 'Thanks for the ride last week!' },
  ];

  // Handle navigation to chat or profile screen when sender is clicked
  const handleSenderClick = (senderName) => {
    // Navigate to chat screen or profile screen based on your choice
    navigation.navigate('ChatScreen', { sender: senderName });
    // Or navigate to profile screen
    // navigation.navigate('ProfileScreen', { sender: senderName });
  };

  // Render a single message item
  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageItem} onPress={() => handleSenderClick(item.sender)}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      {messages.length > 0 ? (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
        />
      ) : (
        <Text style={styles.noMessages}>No messages yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  noMessages: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  messageItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default InboxScreen;
