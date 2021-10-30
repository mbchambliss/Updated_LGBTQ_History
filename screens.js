import React from 'react';
import { navigation } from '@react-navigation/native';
import { View, StyleSheet, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import InfoCard from './components/infoCard';

export const AboutScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.resourceTitle}>ABOUT LGBTQ HISTORY</Text>
                <Text style={styles.resourceText}>Queerstory is an application that can (and should!) be used as an educational resource
                          teaching us about important and momentous figures and events in LGBTQ+ history.</Text>
                <Text style={styles.resourceText}>From the Holocaust to Stonewall. From Socrates to RuPaul. LGBTQ history is embedded
                in all areas of history. They were scholars, royals, scientists, samurais,
                          and political & social activists.</Text>
                <Text style={styles.resourceText}>This application exists to teach and remind of the impact LGBTQ people have made to
                          advance our world.</Text>
                <Text style={styles.resourceText}>Please use this application as a resource to teach, learn, and grow.</Text>
                <Text style={styles.resourceText}>“It is absolutely imperative that every human being’s freedom and human rights
                          are respected, all over the world.” –Jóhanna Sigurðardóttir</Text>
            </View>
        </SafeAreaView>
    );
}

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <InfoCard />
            <Button
                title="Go to About"
                onPress={() => navigation.push('AboutScreen')}
            />
        </View>
    );
}

export const AccountScreen = ({ navigation }) => {
    return (
        <View style={{ display: 'flex' }}>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.photo} source={require('./assets/marsha-cropped.jpg')} />
                <Text style={styles.name}> Marsha P. Johnson</Text>
                <TouchableOpacity
                    style={styles.opac}
                // onPress={pressFav} 
                >
                    <Text style={styles.buttonText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opac}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opac}>
                    <Text style={styles.buttonText}>Tell A Friend About Queerstory</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.opac}
                // onPress={pressContact} 
                >
                    <Text style={styles.buttonText}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opac_last}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    backColor: {
        backgroundColor: '#f6f6f6',
        alignItems: 'center'
    },
    resourceTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        textShadowColor: '#FFB6DA',
        textShadowOffset: { width: 5, height: 3 },
        textShadowRadius: 2,
        marginTop: 22,
        marginBottom: 15,
    },
    resourceText: {
        color: 'black',
        textShadowColor: '#FFB6DA',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 50,
        margin: 10,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    photo: {
        height: 180,
        width: 180,
        marginTop: '15%',
        marginBottom: 10,
        borderRadius: 100,
    },
    name: {
        color: '#FF69B4',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: 'black',
    },
    opac: {
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: '#FF69B4',
        borderRadius: 10,
        height: 40,
        width: 225,
        marginTop: 15,
    },
    opac_last: {
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: '#FF69B4',
        borderRadius: 10,
        height: 40,
        width: 225,
        marginVertical: 15,
    },
    buttonText: {
        color: '#FF69B4',
        textShadowRadius: 1,
        textShadowOffset: { width: 0, height: 1 },
        textShadowColor: 'black',
        alignSelf: 'center',
        paddingTop: '4.5%',
        fontWeight: 'bold',
    },
});