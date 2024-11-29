import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>How do you want to sign up?</Text>

      {/* Facebook Sign Up Button */}
      <TouchableOpacity style={styles.facebookButton}>
        <Icon name="facebook" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      {/* Google/Email Sign Up Button */}
      <TouchableOpacity style={styles.googleButton}>
        <MaterialIcon name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>
          Sign up with Email
        </Text>
      </TouchableOpacity>

      {/* Terms of Service */}
      <Text style={styles.termsText}>
        By signing up you accept the{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877F2',
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10, // Add space between icon and text
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  termsText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#777',
  },
  linkText: {
    color: '#1877F2',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
