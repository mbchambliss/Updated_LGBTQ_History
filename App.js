import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { HomeScreen, AboutScreen, AccountScreen } from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;