import React from 'react';
import { navigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, SafeAreaView, Button, Image, TouchableOpacity, Linking } from 'react-native';
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
            <Button
                title="Go to Resources"
                onPress={() => navigation.push('ResourceScreen')}
            />
            <Button
                title="Sign In"
                onPress={() => navigation.push('SigninScreen')}
            />
        </View>
    );
}

export const FavoritesScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.resourceTitle}>Your Favorites</Text>
            <InfoCard />
        </View>
    );
}

export const ResourceScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.resourceBlock}>
                <Text style={styles.resourceTitle}>POLITICAL</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('http://www.equalityfederation.org/')}>
                    Equality Federation</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.hrc.org/')}>
                    Human Rights Campaign</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.thetaskforce.org/')}>
                    National LGBTQ Task Force</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://victoryfund.org/')}>
                    Victory Fund</Text>
            </View>

            <View style={styles.resourceBlock}>
                <Text style={styles.resourceTitle}>YOUTH</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.glsen.org/')}>
                    Gay, Lesbian, and Straight Education Network</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.accreditedschoolsonline.org/resources/lgbtq-student-support/')}>
                    LGBTQ Student Resources & Support</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://gsanetwork.org/')}>
                    GSA Network</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://pointfoundation.org/')}>
                    Point Foundation</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('http://safeschoolscoalition.org/')}>
                    Safe Schools Coalition</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.thetrevorproject.org/')}>
                    The Trevor Project</Text>
            </View>

            <View style={styles.resourceBlock}>
                <Text style={styles.resourceTitle}>BISEXUAL</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('http://www.biresource.net/')}>
                    Bisexual Resource Center</Text>
            </View>

            <View style={styles.resourceBlock}>
                <Text style={styles.resourceTitle}>TRANSGENDER</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://transequality.org/')}>
                    National Center for Transgender Equality (NCTE)</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://srlp.org/')}>
                    Sylvia Rivera Law Project</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://transgenderlawcenter.org/')}>
                    Transgender Law Center</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.transgenderlegal.org/')}>
                    Transgender Legal Defense & Education Fund</Text>
            </View>

            <View style={styles.resourceBlock}>
                <Text style={styles.resourceTitle}>LEGAL</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.aclu.org/issues/lgbt-rights?redirect=lgbt-rights')}>
                    ACLU</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.lambdalegal.org/')}>
                    Lambda Legal</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://lgbtbar.org/')}>
                    The LGBT Bar</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://www.nclrights.org/')}>
                    National Center for Lesbian Rights (NCLR)</Text>
            </View>

            <View style={styles.resourceBlock}>
                <Text style={styles.resourceTitle}>PARENTS OF</Text>
                <Text style={styles.resourceTitle}>LGBTQ+ CHILDREN</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://pflag.org/')}>
                    Parents, Families, and Friends of Lesbians & Gays (PFLAG)</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('http://www.straightforequality.org/')}>
                    Straight For Equality</Text>
            </View>
        </SafeAreaView>
    );
}

export const ContactScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.resourceTitle}>Contact Us</Text>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>E-mail</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>Message</Text>
            <TextInput style={styles.inputMessage}
                multiline
                numberOfLines={6}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
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
                    onPress={() => navigation.push('FavoritesScreen')}
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
                    onPress={() => navigation.push('ContactScreen')}
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

export const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.feedback}>SIGN IN</Text>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.textInput}
                    name="username"
                />
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Google Sign In</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.already}>Not a user?</Text>
                    <Text
                        style={styles.alreadyBtnText}
                        onPress={() => { navigation.push('SignupScreen') }}>
                        Sign Up
                        </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    already: {
        fontSize: 16,
        marginTop: '9%',
        marginLeft: '24%',
        color: '#FF69B4',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: 'black',
        alignSelf: 'center',
    },
    alreadyBtnText: {
        color: '#1dacd6',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowRadius: .5,
        textShadowOffset: { width: .7, height: .7 },
        textShadowColor: 'black',
        marginLeft: '2%',
        marginTop: '9%',
        paddingLeft: 2,
        textDecorationLine: 'underline',
    },
    backColor: {
        backgroundColor: '#f6f6f6',
        alignItems: 'center'
    },
    button: {
        borderWidth: 4,
        borderColor: '#1dacd6',
        alignSelf: 'center',
        backgroundColor: '#1dacd6',
        borderRadius: 50,
        marginTop: 20,
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
    btnText: {
        color: 'white',
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 20,
        fontWeight: 'bold',
        textShadowRadius: 3,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#FF69B4',
    },
    feedback: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#FF69B4',
        fontSize: 22,
        marginTop: '20%',
        marginBottom: '10%',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: 'black',
    },
    inputMessage: {
        width: '75%',
        height: 100,
        borderColor: '#1dacd6',
        borderWidth: 2,
        marginLeft: '10%',
        marginBottom: 30,
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
    photo: {
        height: 180,
        width: 180,
        marginTop: '15%',
        marginBottom: 10,
        borderRadius: 100,
    },
    resourceBlock: {
        backgroundColor: '#FF69B4',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 10,
        padding: 5,
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
    secondaryResourceText: {
        color: '#f5f5f5',
        fontStyle: 'italic',
        textDecorationColor: '#7AD7F0',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textShadowRadius: 2,
        margin: 10,
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        marginLeft: '10%',
        marginBottom: '2%',
        color: '#FF69B4',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: 'black',
    },
    textInput: {
        width: '75%',
        height: 30,
        borderColor: '#1dacd6',
        borderWidth: 2,
        marginLeft: '10%',
        marginBottom: '8%',
    },
    text: {
        fontSize: 18,
        marginLeft: '10%',
        marginBottom: '2%',
        color: '#FF69B4',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: 'black',
    },
});