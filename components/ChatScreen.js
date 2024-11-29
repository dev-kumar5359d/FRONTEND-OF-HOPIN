import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const ChatScreen = ({ route, navigation }) => {
  const { sender } = route.params; // Sender's name passed from the InboxScreen
  const [messages, setMessages] = useState([
    { id: '1', sender: 'DEV CHAUHAN', message: 'Hey! Is the ride still available?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // This will focus on the text input when the screen is loaded
    return () => setNewMessage('');
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: String(messages.length + 1), sender: 'You', message: newMessage },
      ]);
      setNewMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}:</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.chatContainer}>
          <View style={styles.header}>
            <Text style={styles.chatHeader}>{sender}</Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.iconButton} onPress={() => alert('Calling')}>
                <Icon name="phone" size={25} color="#4CAF50" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => alert('Video Calling')}>
                <Icon name="video-camera" size={25} color="#FF6347" />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={styles.messageList}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
              value={newMessage}
              onChangeText={setNewMessage}
              onSubmitEditing={handleSendMessage}
            />
            <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  chatContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    gap: 20,
    color:'#FF6B6B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  chatHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
    flex: 1,
    textAlign: 'left',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    color:'#FF6B6B',
  },
  iconButton: {
    marginLeft: 30,
    color:'#FF6B6B',
  },
  messageList: {
    flex: 1,
    marginBottom: 60, // To ensure input is not hidden behind keyboard
  },
  messageContainer: {
    marginVertical: 5,
  },
  sender: {
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  message: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#eaeaea',
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#FF6B6B',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;