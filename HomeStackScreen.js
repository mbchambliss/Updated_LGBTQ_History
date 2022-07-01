import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';
import { HomeScreen } from './screens';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = ({ route }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
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
                            size={24}
                            onPress={() =>
                                navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <AntIcon.Button
                            name="calendar"
                            backgroundColor="#fcedfc"
                            color="#398ff4"
                            size={24}
                            onPress={() => navigation.navigate('Select A Date')}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#fcedfc',
                        height: 200
                    },
                    headerShadowVisible: false
                })}
            />
        </HomeStack.Navigator>
    )
};