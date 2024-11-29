import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import LoginScreen from './components/login'; // Ensure correct path
import LoginPage from './components/loginpage';
import SignPage from './components/signup';
import HomeScreen from './components/Home';
import InboxScreen from './components/Inbox';
import ProfileScreen from './components/Profile';
import SearchScreen from './components/Search';
import YourRideScreen from './components/YourRide';
import GiveRideScreen from './components/GiveARide'; // Import the new GiveRideScreen
import ChatScreen from './components/ChatScreen'; // Ensure correct path to ChatScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        
        {/* Authentication Screens */}
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hide header on the LoginScreen
        />
        <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ title: 'Login Details' }} // Title for login details page
        />
        <Stack.Screen 
          name="SignPage" 
          component={SignPage} 
          options={{ title: 'Sign Up' }} // Title for signup page
        />

        {/* Main Application Screens */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home', // Title for Home page
            headerLeft: null, // Remove back arrow on Home screen
          }} 
        />
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Search' }} // Title for Search screen
        />
        <Stack.Screen 
          name="Inbox" 
          component={InboxScreen} 
          options={{ title: 'Inbox' }} // Title for Inbox page
        />
        <Stack.Screen 
          name="YourRide" 
          component={YourRideScreen} 
          options={{ title: 'Your Ride' }} // Title for Your Ride page
        />
        <Stack.Screen 
          name="GiveRide" 
          component={GiveRideScreen} 
          options={{ title: 'Give a Ride' }} // Title for the GiveRide screen
        />

        {/* Profile Screen */}
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Profile' }} // Title for Profile page
        />

        {/* Chat Screen */}
        <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
          options={{ title: 'Chat' }} // Set title for Chat Screen
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
