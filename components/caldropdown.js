import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../stylesheets/screens_styles';


function CalDropdown() {
    console.log('CalDropdown should show!');
    return (
        <View style={[styles.flexDisplayJustifyCenter, styles.alignCenter]}>
            <View style={styles.warning_modal}>
                <Text>TESTING</Text>
            </View>
        </View>
    )
}

export default CalDropdown;