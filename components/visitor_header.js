import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from '../stylesheets/header_styles';

function VisitorHeader({ screenName }) {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <View style={{ width: '33%' }}></View>
            <View style={{ width: '33%', alignItems: 'center' }}>
                <Image
                    style={{
                        width: 90, height: 90
                    }}
                    source={require('../assets/updated_logo_no_background.png')}
                />
            </View>

            {screenName != '' &&
                <View style={{ width: '33%', height: 90, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <AntIcon.Button
                        name="login"
                        color="#F48FB1"
                        size={28}
                        backgroundColor="#F4F5F0"
                        onPress={() => navigation.navigate(screenName)}
                    />
                </View>
            }
        </View>
    );
}

export default VisitorHeader;