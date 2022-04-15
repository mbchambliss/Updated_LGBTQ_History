import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  HomeScreen,
  AboutScreen,
  AccountScreen,
  FavoritesScreen,
  ContactScreen,
  ResourceScreen,
  SigninScreen,
  SignupScreen,
  ForgotPasswordScreen
} from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ title: "Sign In" }} />

        <Stack.Screen name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "LGBTQ+ History",
            headerLeft: () => (
              <Icon.Button
                name="align-justify"
                color="#FF69B4"
                backgroundColor="#fff"
                onPress={() => navigation.push('AccountScreen')}
              />
            ),
            headerRight: () => (
              <Icon.Button
                name="user"
                color="#FF69B4"
                backgroundColor="#fff"
                onPress={() => navigation.push('AccountScreen')}
              />
            ),
          })}
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: "About" }} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: "Account" }} />
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ title: "Favorites" }} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ title: "Contact Us" }} />
        <Stack.Screen name="ResourceScreen" component={ResourceScreen} options={{ title: "Resources" }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: "Sign Up" }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ title: "Reset Password" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
