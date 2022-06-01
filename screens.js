import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    View, KeyboardAvoidingView, Text, TextInput,
    ScrollView, Image, TouchableOpacity, Linking, Modal
} from 'react-native';
import InfoCard from './components/infoCard';
import VisitorHeader from './components/visitor_header';
import styles from './stylesheets/screens_styles';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword, sendPasswordResetEmail,
    signInWithEmailAndPassword
} from "firebase/auth";

export const AboutScreen = () => {
    return (
        <View>
            <View style={{ height: 20, backgroundColor: '#fcedfc' }}></View>
            <View style={{ height: '100%' }}>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.resourceBlock, styles.about, styles.flexOne]}>
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
            </View>
        </View>
    );
}

export const HomeScreen = () => {
    return (
        <View>
            <View style={{ height: 20, backgroundColor: '#fcedfc' }}></View>
            <ScrollView>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.resourceBlock, styles.flexOne]}
                >
                    <InfoCard />
                </LinearGradient>
            </ScrollView>
        </View>
    );
}

export const VisitorScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#FEF2F8' }}>
            <VisitorHeader screenName='Signin' />
            <InfoCard />
        </ScrollView>
    );
}

export const FavoritesScreen = () => {
    return (
        <View>
            <Text style={styles.resourceTitle}>Your Favorites</Text>
            <InfoCard />
        </View>
    );
}

export const ResourceScreen = () => {
    return (
        <View>
            <View style={{ height: 20, backgroundColor: '#fcedfc' }}></View>
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
        </View>

    );
}

export const ContactScreen = () => {
    return (
        <View>
            <View style={{ height: 20, backgroundColor: '#fcedfc' }}></View>
            <View style={{ height: '100%' }}>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.resourceBlock, styles.about, styles.flexOne]}>
                    <View>
                        <Text style={styles.resourceTitle}>Contact Us</Text>
                        <Text style={styles.resourceText}>To contact us regarding issues with your account,
                        to tell us about an event in history we should add,
                or anything else, please contact ___@gmail.com.</Text>
                        <Text style={styles.resourceText}>Thank you for supporting the app!</Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}

export const AccountScreen = ({ navigation }) => {
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate('Signin');
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
        <View>
            <View style={{ height: 20, backgroundColor: '#fcedfc' }}></View>
            <View style={{ height: '100%' }}>
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
                        style={[styles.opac, styles.flexDisplayJustifyCenter]}
                        onPress={() => navigation.push('FavoritesScreen')}
                    >
                        <Text style={[styles.buttonText, styles.alignSelfCenter]}>My Favorites</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={[styles.opac, styles.flexDisplayJustifyCenter]}>
                    <Text style={[styles.buttonText, styles.alignSelfCenter]}>Edit Profile</Text>
                </TouchableOpacity> */}

                    {/* <TouchableOpacity style={[styles.opac, styles.flexDisplayJustifyCenter]}>
                <Text style={[styles.buttonText, styles.alignSelfCenter]}>Tell A Friend</Text>
            </TouchableOpacity> */}
                    <TouchableOpacity
                        style={[styles.opac, styles.flexDisplayJustifyCenter]}
                        onPress={() => { navigation.navigate('LoggedIn', { screen: 'Contact' }) }}
                    >
                        <Text style={[styles.buttonText, styles.alignSelfCenter]}>Contact Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.opac, styles.flexDisplayJustifyCenter]}
                        onPress={() => { navigation.navigate('LoggedIn', { screen: 'Resources' }) }}
                    >
                        <Text style={[styles.buttonText, styles.alignSelfCenter]}>Resources</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.opac, styles.flexDisplayJustifyCenter]}
                        onPress={() => { navigation.navigate('LoggedIn', { screen: 'About' }) }}
                    >
                        <Text style={[styles.buttonText, styles.alignSelfCenter]}>About Queerstory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.opac, styles.flexDisplayJustifyCenter]}
                        onPress={handleSignOut}
                    >
                        <Text style={[styles.buttonText, styles.alignSelfCenter]}>Sign Out</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
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
            <VisitorHeader screenName='Signin' />
            <Text style={[styles.signInTitle, styles.alignSelfCenter]}>RESET PASSWORD</Text>

            <View style={styles.flexDisplayJustifyCenter}>

                <Text style={styles.signInText}>Email</Text>
                <TextInput style={styles.textInput}
                    name="email"
                    id="email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TouchableOpacity style={[styles.signInButtonLong, styles.alignSelfCenter]}
                    onPress={handlePasswordReset}
                >
                    <Text style={[styles.btnText, styles.alignSelfCenter]}>Send</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

export const SplashScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(auth.currentUser);

    console.log('Splash user: ', user);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("SPLASH: Should go to Home screen.");
                console.log('useEffect Splash user: ', user);
                navigation.navigate('LoggedIn');
            } else {
                navigation.navigate('Signin');
            }
        })
        return unsubscribe;
    }, [user])

    return (
        <View style={{ height: '100%', backgroundColor: 'blue' }}>
            <Image
                style={{ width: 190, height: 190 }}
                source={require('./assets/updated_logo_no_background.png')}
            />
        </View>
    )
}

export const SigninScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(auth.currentUser);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errorMsg, setErrorMsg] = useState("");
    // const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("IN SIGN IN - Go to Home");
                console.log("USER LOGGED IN: ", user);
                navigation.navigate('LoggedIn');
            }
        })
        return unsubscribe;
    }, [user])

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
            if (signIn.user) {
                console.log("signIn variable IF");
            }
        } catch (error) {
            let message = error.message;
            if (message.includes("auth/internal-error") && password.length === 0) {
                alert("Please make sure to include a password.");
                // setErrorMsg("Please make sure to include a password.");
            } else if (message.includes("auth/invalid-email")) {
                alert("Please make sure to include an email.");
                // setErrorMsg("Please make sure to include an email.");
            } else if (message.includes("auth/wrong-password")) {
                alert("The password you entered for this account is incorrect.");
                // setErrorMsg("The password you entered for this account is incorrect.");
            } else {
                alert(error.message)
                // setErrorMsg("Something went wrong. Please contact email@qhapp.com.");
            }
            // setModalVisible(!modalVisible);
        };
    }

    return (
        <KeyboardAvoidingView>
            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[styles.flexDisplayJustifyCenter, styles.alignCenter]}>
                    <View style={styles.warning_modal}>
                        <Text>TESTING</Text>
                    </View>
                </View>

            </Modal> */}

            <Text style={[styles.signInTitle, styles.alignSelfCenter]}>SIGN IN</Text>

            <View style={styles.flexDisplayJustifyCenter}>

                <View style={styles.flexDisplayJustifyCenter}>
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
                    <View style={[styles.buttonContainerSignIn, styles.flexRow]}>
                        <TouchableOpacity style={[styles.signInButton, styles.alignSelfCenter]}
                            onPress={handleLogin}
                        // onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={[styles.btnText, styles.alignSelfCenter]}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.signInButton, styles.alignSelfCenter]}
                            onPress={handleSignUp}
                        >
                            <Text style={[styles.btnText, styles.alignSelfCenter]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.forgotPasswordBtn, styles.alignSelfCenter]}
                            onPress={() => { navigation.navigate('ForgotPassword') }}
                        >
                            <Text style={[styles.forgotPasswordBtnText, styles.alignSelfCenter]}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.forgotPasswordBtn, styles.alignSelfCenter]}
                            onPress={() => { navigation.navigate('Visitor') }}
                        >
                            <Text style={[styles.forgotPasswordBtnText, styles.alignSelfCenter]}>View As Guest</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}

export const SignupScreen = () => {
    return (
        <View style={styles.flexDisplayJustifyCenter, styles.flexOne}>
            <Text style={[styles.feedback, styles.alignSelfCenter]}>SIGN UP</Text>
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

            <TouchableOpacity style={[styles.button, styles.alignSelfCenter]}>
                <Text style={[styles.btnText, styles.alignSelfCenter]}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.alignSelfCenter]}>
                <Text style={[styles.btnText, styles.alignSelfCenter]}>Google Sign In</Text>
            </TouchableOpacity>

            <View style={[styles.signin, styles.flexRow]}>
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