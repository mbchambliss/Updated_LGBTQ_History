import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { navigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, Text, TextInput, SafeAreaView, ScrollView, Button, Image, TouchableOpacity, Linking } from 'react-native';
import InfoCard from './components/infoCard';
import styles from './stylesheets/screens_styles';
import { LinearGradient } from 'expo-linear-gradient';
import { actionCodeSettings, auth } from "./firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

export const AboutScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#398ff4', '#f762a3']}
            locations={[0.1, 1]}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.1, y: 0.9 }}
            style={[styles.resourceBlock, styles.about_flex]}>
            <View>
                <Text style={styles.resourceTitle}>ABOUT QUEERSTORY</Text>
                <Text style={[styles.resourceText, styles.first_resource]}>Queerstory is meant to be utilized as an educational resource to
                          learn about important, momentous figures and events in LGBTQ+ history.</Text>
                <Text style={styles.resourceText}>From the Holocaust to Stonewall. Socrates to RuPaul. LGBTQ+ history is embedded
                throughout all areas of history. They were scholars, royals, scientists, samurais,
                          and most importantly political & social activists.</Text>
                <Text style={styles.resourceText}>This application exists to teach and remind us of the impact the LGBTQ+ community
                    have made to advance the world around us.</Text>
                <Text style={styles.resourceText}>Please use this app as a resource to teach, learn, and grow. Please share this app with anyone (and everyone!)
                    to help inform about our history to advance understanding, love, and progress.</Text>
                <Text style={styles.resourceText}>“It is absolutely imperative that every human being’s freedom and human rights
                          are respected, all over the world.” </Text>
                <Text style={styles.resourceText}>–Jóhanna Sigurðardóttir</Text>
            </View>
        </LinearGradient >

    );
}

export const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: '#fcedfc' }}>
            <InfoCard />

            <Button
                title="Show User Info"
                onPress={() => console.log(auth.currentUser)}
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
            <LinearGradient
                colors={['#398ff4', '#f762a3']}
                locations={[0.1, 1]}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.1, y: 0.9 }}
                style={styles.resources_block}
            >
                <Text style={styles.resourceTitle}>POLITICAL</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('http://www.equalityfederation.org/')}>
                    Equality Federation</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://www.hrc.org/')}>
                    Human Rights Campaign</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://www.thetaskforce.org/')}>
                    National LGBTQ Task Force</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://victoryfund.org/')}>
                    Victory Fund</Text>


                <Text style={styles.resourceTitle}>YOUTH</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://www.glsen.org/')}>
                    Gay, Lesbian, and Straight Education Network</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://www.accreditedschoolsonline.org/resources/lgbtq-student-support/')}>
                    LGBTQ Student Resources & Support</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://gsanetwork.org/')}>
                    GSA Network</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://pointfoundation.org/')}>
                    Point Foundation</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('http://safeschoolscoalition.org/')}>
                    Safe Schools Coalition</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('https://www.thetrevorproject.org/')}>
                    The Trevor Project</Text>

                <Text style={styles.resourceTitle}>BISEXUAL</Text>
                <Text style={[styles.secondaryResourceText, styles.pink_line]}
                    onPress={() => Linking.openURL('http://www.biresource.net/')}>
                    Bisexual Resource Center</Text>

                <Text style={styles.resourceTitle}>TRANSGENDER</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://transequality.org/')}>
                    National Center for Transgender Equality (NCTE)</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://srlp.org/')}>
                    Sylvia Rivera Law Project</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://transgenderlawcenter.org/')}>
                    Transgender Law Center</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://www.transgenderlegal.org/')}>
                    Transgender Legal Defense & Education Fund</Text>

                <Text style={styles.resourceTitle}>LEGAL</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://www.aclu.org/issues/lgbt-rights?redirect=lgbt-rights')}>
                    ACLU</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://www.lambdalegal.org/')}>
                    Lambda Legal</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://lgbtbar.org/')}>
                    The LGBT Bar</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://www.nclrights.org/')}>
                    National Center for Lesbian Rights (NCLR)</Text>

                <Text style={styles.resourceTitle}>PARENTS</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('https://pflag.org/')}>
                    Parents, Families, and Friends of Lesbians & Gays (PFLAG)</Text>
                <Text style={[styles.secondaryResourceText, styles.blue_line]}
                    onPress={() => Linking.openURL('http://www.straightforequality.org/')}>
                    Straight For Equality</Text>
            </LinearGradient>
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
    var auth_email = "";
    if (auth.currentUser?.email) {
        let email = auth.currentUser?.email;
        let index_for_display_name = email.indexOf('@');
        auth_email = email.slice(0, index_for_display_name);
    }

    return (
        <LinearGradient
            colors={['#398ff4', '#f762a3']}
            locations={[0.1, 1]}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.1, y: 0.9 }}
            style={{ flex: 1, alignItems: 'center' }}
        >
            <Image style={styles.photo} source={require('./assets/marsha-cropped.jpg')} />
            <Text style={styles.name}> {auth_email}</Text>
            <TouchableOpacity
                style={styles.opac}
                onPress={() => navigation.push('FavoritesScreen')}
            >
                <Text style={styles.buttonText}>My Favorites</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.opac}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity> */}

            <TouchableOpacity style={styles.opac}>
                <Text style={styles.buttonText}>Tell A Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.opac}
                onPress={() => navigation.push('ContactScreen')}
            >
                <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.opac}
                onPress={() => navigation.push('HomeScreen')}
            >
                <Text style={styles.buttonText}>Today's Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.opac}
                onPress={() => navigation.push('ResourceScreen')}
            >
                <Text style={styles.buttonText}>Resources</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.opac}
                onPress={() => navigation.push('AboutScreen')}
            >
                <Text style={styles.buttonText}>About Queerstory</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opac}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export const ForgotPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");

    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Momentarily you should receive an email to reset your password.");
                navigation.replace("SigninScreen")
            }).catch(error => {
                let message = error.message
                if (message.includes("auth/user-not-found")) {
                    alert("This e-mail is not registered with Queer History. Please register by entering this email and password and clicking 'Register'.");
                    navigation.replace("SigninScreen");
                } else {
                    alert("There has been an unknown error. Please contact mbchambliss@gmail.com for assistance.");
                }
            });
    }

    return (
        <KeyboardAvoidingView>
            <Text style={styles.signInTitle}>RESET PASSWORD</Text>

            <View style={styles.flexCenterSignIn}>

                <Text style={styles.signInText}>Email</Text>
                <TextInput style={styles.textInput}
                    name="email"
                    id="email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TouchableOpacity style={styles.signInButtonLong}
                    onPress={handlePasswordReset}
                >
                    <Text style={styles.btnText}>Send</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

export const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("HomeScreen")
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.message);
            let message = error.message
            if (message.includes("auth/email-already-in-use")) {
                alert("This e-mail is already in registered with Queer History.");
            } else if (message.includes("auth/missing-email")) {
                alert("Please make sure to include an email.");
            } else if (message.includes("auth/internal-error") && password.length === 0) {
                alert("Please make sure to include a password.");
            } else if (message.includes("auth/invalid-email") && password.length === 0) {
                alert("Please make sure to include an email and password.");
            } else {
                alert("Please make sure to include an unregistered email and password.");
            }
        }
    };

    const handleLogin = async () => {
        try {
            const signIn = await signInWithEmailAndPassword(auth, email, password);
            console.log(signIn.user);
        } catch (error) {
            console.log(error.message);
            let message = error.message;
            if (message.includes("auth/internal-error") && password.length === 0) {
                alert("Please make sure to include a password.");
            } else if (message.includes("auth/invalid-email")) {
                alert("Please make sure to include an email.");
            } else if (message.includes("auth/wrong-password")) {
                alert("The password you entered for this account is incorrect.");
            } else {
                alert(error.message)
            }
        };
    }

    return (
        <KeyboardAvoidingView>
            <Text style={styles.signInTitle}>SIGN IN</Text>

            <View style={styles.flexCenterSignIn}>

                <View style={styles.signInCenter}>
                    <Text style={styles.signInText}>Email</Text>
                    <TextInput style={styles.textInput}
                        name="email"
                        id="email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <Text style={styles.signInText}>Password</Text>
                    <TextInput style={styles.textInput}
                        name="password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <View style={styles.buttonContainerSignIn}>
                        <TouchableOpacity style={styles.signInButton}
                            onPress={handleLogin}
                        >
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signInButton}
                            onPress={handleSignUp}
                        >
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.forgotPasswordBtn}
                            onPress={() => { navigation.push('ForgotPasswordScreen') }}
                        >
                            <Text style={styles.forgotPasswordBtnText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <TouchableOpacity style={styles.button}
                        onPress={signInWithGoogle}
                    >
                        <Text style={styles.btnText}>Google Sign In</Text>
                    </TouchableOpacity> */}
                </View>

            </View>
        </KeyboardAvoidingView >
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