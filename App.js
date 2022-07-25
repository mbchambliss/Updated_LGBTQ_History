import React from 'react';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';
import { auth } from "./firebase";

import {
  AboutScreen,
  AccountScreen,
  ContactScreen,
  DateSelectScreen,
  ForgotPasswordScreen,
  ResourceScreen,
  SigninScreen,
  SplashScreen,
  VisitorScreen
} from './screens';

import { HomeStackScreen } from './HomeStackScreen';

const AboutStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const ContactStack = createNativeStackNavigator();
const DateSelectStack = createNativeStackNavigator();
const ResourceStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AboutStackScreen = ({ navigation }) => (
  <AboutStack.Navigator>
    <AboutStack.Screen name="AboutScreen"
      component={AboutScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Image
            style={{ width: 90, height: 90, marginTop: -15 }}
            source={require('./assets/updated_logo_no_background.png')}
          />
        ),
        headerLeft: () => (
          <AntIcon.Button
            name="plus"
            backgroundColor="#fcedfc"
            color="#398ff4"
            onPress={() =>
              navigation.openDrawer()} />
        ),
        headerStyle: {
          backgroundColor: '#fcedfc',
          height: 200
        },
        headerShadowVisible: false
      })}
    />
  </AboutStack.Navigator>
);
const AccountStackScreen = ({ navigation }) => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="AccountScreen"
      component={AccountScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Image
            style={{ width: 90, height: 90, marginTop: -15 }}
            source={require('./assets/updated_logo_no_background.png')}
          />
        ),
        headerLeft: () => (
          <AntIcon.Button
            name="plus"
            backgroundColor="#fcedfc"
            color="#398ff4"
            onPress={() =>
              navigation.openDrawer()} />
        ),
        headerStyle: {
          backgroundColor: '#fcedfc',
          height: 200
        },
        headerShadowVisible: false
      })}
    />
  </AccountStack.Navigator>
);
const ContactStackScreen = ({ navigation }) => (
  <ContactStack.Navigator>
    <ContactStack.Screen name="ContactScreen"
      component={ContactScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Image
            style={{ width: 90, height: 90, marginTop: -15 }}
            source={require('./assets/updated_logo_no_background.png')}
          />
        ),
        headerLeft: () => (
          <AntIcon.Button
            name="plus"
            backgroundColor="#fcedfc"
            color="#398ff4"
            onPress={() =>
              navigation.openDrawer()} />
        ),
        headerStyle: {
          backgroundColor: '#fcedfc',
          height: 200
        },
        headerShadowVisible: false
      })}
    />
  </ContactStack.Navigator>
);
const DateSelectStackScreen = ({ navigation }) => (
  <DateSelectStack.Navigator>
    <DateSelectStack.Screen name="ContactScreen"
      component={DateSelectScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Image
            style={{ width: 90, height: 90, marginTop: -15 }}
            source={require('./assets/updated_logo_no_background.png')}
          />
        ),
        headerLeft: () => (
          <AntIcon.Button
            name="plus"
            backgroundColor="#fcedfc"
            color="#398ff4"
            onPress={() =>
              navigation.openDrawer()} />
        ),
        headerStyle: {
          backgroundColor: '#fcedfc',
          height: 200
        },
        headerShadowVisible: false
      })}
    />
  </DateSelectStack.Navigator>
);
const ResourceStackScreen = ({ navigation }) => (
  <ResourceStack.Navigator>
    <ResourceStack.Screen name="ResourceScreen"
      component={ResourceScreen}
      options={({ navigation }) => ({
        headerTitle: () => (
          <Image
            style={{ width: 90, height: 90, marginTop: -15 }}
            source={require('./assets/updated_logo_no_background.png')}
          />
        ),
        headerLeft: () => (
          <AntIcon.Button
            name="plus"
            backgroundColor="#fcedfc"
            color="#398ff4"
            onPress={() =>
              navigation.openDrawer()} />
        ),
        headerStyle: {
          backgroundColor: '#fcedfc',
          height: 200
        },
        headerShadowVisible: false
      })}
    />
  </ResourceStack.Navigator>
);
const Stack = createNativeStackNavigator();

function LoggedIn({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('Signin');
      })
      .catch(error => alert(error.message))
  }
  return (
    <Drawer.Navigator defaultStatus="closed" initialRouteName="Events" screenOptions={{ headerShown: false }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={handleSignOut} />
          </DrawerContentScrollView>
        )
      }}>
      <Drawer.Screen name="Events" component={HomeStackScreen} />
      <Drawer.Screen name="Select A Date" component={DateSelectStackScreen} />
      <Drawer.Screen name="About" component={AboutStackScreen} />
      <Drawer.Screen name="Account" component={AccountStackScreen} />
      <Drawer.Screen name="Contact" component={ContactStackScreen} />
      <Drawer.Screen name="Resources" component={ResourceStackScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} navigation={navigation} options={{ headerShown: false }} />

        <Stack.Group>
          <Stack.Screen name='Signin' component={SigninScreen} navigation={navigation} options={{ headerShown: false }} />
          <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Visitor' component={VisitorScreen} options={{ headerShown: false }} />
        </Stack.Group>

        <Stack.Screen name='LoggedIn' component={LoggedIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
