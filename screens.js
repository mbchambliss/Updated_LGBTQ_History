import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { navigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, Text, TextInput, SafeAreaView, ScrollView, Button, Image, TouchableOpacity, Linking } from 'react-native';
import InfoCard from './components/infoCard';
import styles from './stylesheets/screens_styles';
import { auth, signInWithGoogle } from "./firebase";

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
        <ScrollView>
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
        </ScrollView>
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
        <ScrollView>
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
                <Text style={styles.resourceTitle}>PARENTS</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('https://pflag.org/')}>
                    Parents, Families, and Friends of Lesbians & Gays (PFLAG)</Text>
                <Text style={styles.secondaryResourceText}
                    onPress={() => Linking.openURL('http://www.straightforequality.org/')}>
                    Straight For Equality</Text>
            </View>
        </ScrollView>
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

export const AccountScreen = () => {
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("SigninScreen")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={{ display: 'flex' }}>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.photo} source={require('./assets/marsha-cropped.jpg')} />
                <Text style={styles.name}> {auth.currentUser?.email}</Text>
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
                <TouchableOpacity style={styles.opac_last}
                    onPress={handleSignOut}
                >
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const SigninScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("AccountScreen")
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.flexCenter}>
            <View>
                <Text style={styles.feedback}>SIGN IN</Text>

                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput}
                    name="email"
                    id="email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput}
                    name="password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={handleSignUp}
                >
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={signInWithGoogle}
                >
                    <Text style={styles.btnText}>Google Sign In</Text>
                </TouchableOpacity>

                <View style={styles.signin}>
                    <Text style={styles.already}>Not a user?</Text>
                    <Text
                        style={styles.alreadyBtnText}
                        onPress={() => { navigation.push('SignupScreen') }}>
                        Sign Up
                    </Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.flexCenter}>
            <Text style={styles.feedback}>SIGN UP</Text>
            <Text style={styles.text}>First</Text>
            <TextInput style={styles.textInput}
                name="first"
            />
            <Text style={styles.text}>Last</Text>
            <TextInput style={styles.textInput}
                name="last"
            />
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.textInput}
                name="email"
            />
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textInput}
                name="password"
            />

            <Text style={styles.text}>Confirm Password</Text>
            <TextInput style={styles.textInput}
                name="confirmPassword"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Google Sign In</Text>
            </TouchableOpacity>

            <View style={styles.signin}>
                <Text style={styles.already}>Already a user?</Text>
                <Text
                    style={styles.alreadyBtnText}
                    onPress={() => { navigation.push('SigninScreen') }}>
                    Sign In
                    </Text>
            </View>
        </View >
    )
}