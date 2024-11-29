import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo.png'; 

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={logo} 
          style={styles.logo}
        />
        <Text style={styles.appName}>OPIN</Text>
      </View>
      <Text style={styles.tagline}>Your ride, Your Choice</Text>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignPage')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10, // Space between logo and text
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    // Optional: adjust margin or padding for fine-tuning
    marginTop: 36, // Adjust this value as needed to align vertically with the logo
    marginRight:35,
  },
  tagline: {
    fontSize: 16,
    color: '#333',
    marginBottom: 40,
  },
  signUpButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
  },
  loginText: {
    color: '#1E90FF',
    fontSize: 16,
  },
});

export default LoginScreen;
