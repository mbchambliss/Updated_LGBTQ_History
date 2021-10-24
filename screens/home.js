import React from 'react';
import { View, Text, Button } from 'react-native';
import AboutScreen from './about';
// import InfoCard from '../components/infoCard';


function HomeScreen() {
    return (
        <View>
            <Text>Hi Test Test</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.push("AboutScreen")}
            />
        </View>
        // <InfoCard />
    );
}

export default HomeScreen;