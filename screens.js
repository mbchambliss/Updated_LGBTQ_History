import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    View, Keyboard, KeyboardAvoidingView, Text, TextInput,
    ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback,
    Linking, ActivityIndicator
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
            <View style={{ height: '100%' }}>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.about, styles.flexOne]}>
                    <ScrollView>
                        <Text style={styles.resourceTitle}>ABOUT</Text>
                        <Text style={[styles.resourceText, styles.first_resource]}>Queer Moments (in History) is meant to be utilized as an educational resource to
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
                    </ScrollView>
                </LinearGradient >
            </View>
        </View>
    );
}

export const HomeScreen = ({ route }) => {
    const [daySelect, setDaySelect] = useState(new Date().getDate());
    const [monthSelect, setMonthSelect] = useState(new Date().getMonth() + 1);

    let today = parseInt(new Date().getMonth() + 1) + " / " + parseInt(new Date().getDate());

    const checkRouteParamsForDate = (daySelect, monthSelect, route) => {
        if (route.params) {
            if (route.params['day'] !== "" || route.params['day'] !== undefined) {
                if (daySelect === route.params['day']) {
                    return;
                } else {
                    setDaySelect(route.params['day']);
                }
            }
            if (route.params['month'] !== "" || route.params['month'] !== undefined) {
                if (monthSelect === route.params['month']) {
                    return;
                } else {
                    setMonthSelect(route.params['month']);
                }
            }
            console.log('Month & day: ', monthSelect, "/", daySelect);
        }
    }

    checkRouteParamsForDate(daySelect, monthSelect, route);

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <View style={{ height: '3%', backgroundColor: '#fcedfc' }}></View>
            <LinearGradient
                colors={['#398ff4', '#f762a3']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.margin_block}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={{ height: '92%' }}>
                    <InfoCard daySelect={daySelect} monthSelect={monthSelect} />
                </ScrollView>
                {(today != (monthSelect + " / " + daySelect)) &&
                    <View style={[styles.alignCenter, {
                        shadowColor: '#FFF',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        marginTop: 8
                    }]}>
                        <TouchableOpacity
                            style={[styles.currentDayBtn, styles.buttonLengthLong, {
                                backgroundColor: '#09417D', borderColor: '#FFF', borderWidth: 1
                            }]}
                            onPress={() => {
                                route.params['day'] = new Date().getDate();
                                route.params['month'] = new Date().getMonth() + 1;
                                setMonthSelect(route.params['month']);
                                setDaySelect(route.params['day']);
                            }}>
                            <Text style={[styles.buttonText, styles.alignSelfCenter]}>Today's Events</Text>
                        </TouchableOpacity>
                    </View>
                }
            </LinearGradient>
        </View >
    );
}

export const DateSelectScreen = ({ navigation }) => {
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const [invalidMonth, setInvalidMonth] = useState(false);
    const [invalidDay, setInvalidDay] = useState(false);

    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        checkValidMonth(month);
        checkValidDay(day);
    }, [month, day])

    const checkValidMonth = () => {
        if (parseInt(month) == 0 || parseInt(month) > 12 || month == null) {
            setInvalidMonth(true);
        } else {
            setInvalidMonth(false);
        }
    }

    const checkValidDay = () => {
        if (invalidDay == true) {
            setInvalidDay(false);
        }

        if (parseInt(day) == 0) {
            setInvalidDay(true);
        } else if (parseInt(month) == 2) {
            if (parseInt(day) > 29) {
                setInvalidDay(true);
            }
        } else if (parseInt(month) == 4 || parseInt(month) == 6 || parseInt(month) == 9 || parseInt(month) == 11) {
            if (parseInt(day) > 30) {
                setInvalidDay(true);
            }
        } else if (parseInt(month) == 1 || parseInt(month) == 3 || parseInt(month) == 5 || parseInt(month) == 7 || parseInt(month) == 8 || parseInt(month) == 10 || parseInt(month) == 12) {
            if (parseInt(day) > 31) {
                setInvalidDay(true);
            }
        } else {
            setInvalidDay(false);
        }
    }

    const stripZeros = (date) => {
        if (date.charAt(0) == "0") {
            let newDate = date.slice(1);
            return newDate;
        } else {
            return date;
        }
    }

    const checkDateInput = () => {
        if (invalidDay || invalidMonth) {
            return;
        } else {
            navigation.navigate('HomeScreen', { month: stripZeros(month), day: stripZeros(day) });
        }
    }

    return (
        <View>
            <View style={{ height: '100%' }}>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.about, styles.flexOne]}>
                    <View style={[styles.about, { alignItems: 'center' }]}>
                        <Text style={styles.resourceTitle}>SELECT A DATE</Text>

                        <View style={{
                            width: '90%', marginTop: 30, marginBottom: 30, display: 'flex', alignItems: 'center',
                            borderColor: '#FF69B4', borderWidth: 4, borderRadius: 10,
                            backgroundColor: '#FFF', padding: 20
                        }}>
                            <View style={{ marginBottom: 30 }}>
                                <Text style={{ fontSize: 20 }}>To see Queer Moments from a particular day, enter the numerical values for the month and day.</Text>
                            </View>

                            {invalidMonth &&
                                <View style={[styles.dateWarning, styles.redButton]}>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#CC0202' }}>PLEASE SELECT A VALID MONTH (1-12)</Text>
                                </View>
                            }

                            {invalidDay &&
                                <View style={[styles.dateWarning, styles.redButton]}>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#CC0202' }}>PLEASE SELECT A VALID DAY</Text>
                                </View>
                            }

                            <View style={{
                                display: 'flex', flexDirection: 'row',
                                width: '100%', marginTop: '4%',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    display: 'flex', flexDirection: 'column', width: '30%'
                                }}>
                                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Month</Text>
                                    </View>
                                    <View style={{ display: 'flex', alignItems: 'center' }}>
                                        <TextInput style={{
                                            width: 100, height: 50,
                                            borderRadius: 14, borderColor: '#1dacd6',
                                            borderWidth: 4, backgroundColor: '#FFF'
                                        }}
                                            name="month"
                                            keyboardType="number-pad"
                                            textAlign="center"
                                            maxLength={2}
                                            fontSize={24}
                                            value={month}
                                            onChangeText={setMonth}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '20%' }}></View>

                                <View style={{
                                    display: 'flex', flexDirection: 'column'
                                }}>
                                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Day</Text>
                                    </View>
                                    <TextInput style={{
                                        width: 100, height: 50,
                                        borderRadius: 14, borderColor: '#1dacd6',
                                        borderWidth: 4, backgroundColor: '#FFF'
                                    }}
                                        name="day"
                                        keyboardType="number-pad"
                                        textAlign="center"
                                        maxLength={2}
                                        fontSize={24}
                                        value={day}
                                        onChangeText={setDay}
                                    />
                                </View>
                            </View>
                            <View style={{ width: '100%', display: 'flex', marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={[{ marginRight: 20 }, styles.signInButton, styles.buttonLength, styles.blueBackground]}
                                    onPress={checkDateInput}
                                >
                                    <Text style={[styles.buttonText, styles.alignSelfCenter]}>Select</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.signInButton, styles.buttonLength, styles.blueBackground]}
                                    onPress={() => navigation.goBack()}>
                                    <Text style={[styles.buttonText, styles.alignSelfCenter]}>Dismiss</Text>
                                </TouchableOpacity>
                            </View >
                        </View>
                    </View >
                </LinearGradient>
            </View >
        </View >
    )
}

export const VisitorScreen = () => {
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <VisitorHeader screenName='Signin' />
            <View style={{ height: '3%' }}></View>
            <LinearGradient
                colors={['#398ff4', '#f762a3']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.margin_block}
            >
                <ScrollView style={{ height: '95%' }}>
                    <InfoCard daySelect={day} monthSelect={month} />
                </ScrollView>
            </LinearGradient>
        </View>
    );
}

export const ResourceScreen = () => {
    return (
        <View>
            <View style={{ height: '100%' }}>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.about, styles.resources_block]}
                >
                    <ScrollView>
                        <Text style={styles.resourceTitle}>ABORTION</Text>
                        <Text style={[styles.secondaryResourceText, styles.pink_line]}
                            onPress={() => Linking.openURL('https://abortionfunds.org/need-abortion/')}>
                            National Network of Abortion Funds</Text>
                        <Text style={[styles.secondaryResourceText, styles.pink_line]}
                            onPress={() => Linking.openURL('https://brigidalliance.org/')}>
                            The Brigid Alliance</Text>
                        <Text style={[styles.secondaryResourceText, styles.pink_line]}
                            onPress={() => Linking.openURL('https://blackrj.org/')}>
                            National Black Women’s Reproductive Justice Agenda</Text>
                        <Text style={[styles.secondaryResourceText, styles.pink_line]}
                            onPress={() => Linking.openURL('https://janesdueprocess.org/about/')}>
                            Jane's Due Process (Texas)</Text>


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
                    </ScrollView>
                </LinearGradient>
            </View>
        </View>

    );
}

export const ContactScreen = () => {
    return (
        <View>
            <View style={{ height: '100%' }}>
                <LinearGradient
                    colors={['#398ff4', '#f762a3']}
                    locations={[0.1, 1]}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.about, styles.flexOne]}>
                    <View>
                        <Text style={styles.resourceTitle}>CONTACT US</Text>
                        <Text style={styles.resourceText}>To contact us regarding issues with your account,
                        to tell us about a moment in history,
                            or anything else, please contact QueerMomentsinHistory@gmail.com.</Text>
                        <Text style={styles.resourceText}>If you are contacting about a moment or historical queer figure, please include as many details as possible, including any dates or links to research.</Text>
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
                    {/* <TouchableOpacity
                        style={[styles.opac, styles.flexDisplayJustifyCenter]}
                        onPress={() => navigation.push('FavoritesScreen')}
                    >
                        <Text style={[styles.buttonText, styles.alignSelfCenter]}>My Favorites</Text>
                    </TouchableOpacity> */}

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
                alert("In a few moments you should receive an email to reset your password.");
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
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                <View>
                    <Text style={[styles.signInTitle, styles.alignSelfCenter]}>RESET PASSWORD</Text>

                    <View style={styles.flexDisplayJustifyCenter}>
                        <View style={styles.signInTextContainer}>
                            <Text style={styles.signInText}> Email </Text>
                        </View>
                        <TextInput style={styles.textInput}
                            name="email"
                            id="email"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />

                        <TouchableOpacity style={[styles.signInButton, styles.buttonLengthLong, styles.blueBackground, styles.alignSelfCenter]}
                            onPress={handlePasswordReset}
                        >
                            <Text style={[styles.btnText, styles.alignSelfCenter]}>Send</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export const SplashScreen = ({ navigation }) => {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("User is signed in.");
                setTimeout(() => {
                    navigation.navigate('LoggedIn', { screen: 'Home' });
                }, 2000);
            } else {
                navigation.navigate('Signin');
            }
        })
        return unsubscribe;
    }, [user])

    return (
        <View style={[{ justifyContent: 'center', backgroundColor: '#000' }, styles.flexOne]}>
            <ActivityIndicator size="large" color="#FAC7ED" />
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
                console.log("USER LOGGED IN! Go to Home.");
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
                    <View style={[styles.blueBackground, styles.warning_modal]}>
                        <Text>TESTING</Text>
                    </View>
                </View>

            </Modal> */}
            <VisitorHeader screenName='' />

            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                <View>
                    <Text style={[styles.signInTitle, styles.alignSelfCenter]}>SIGN IN</Text>

                    <View style={styles.flexDisplayJustifyCenter}>
                        <View style={styles.flexDisplayJustifyCenter}>
                            <View style={styles.signInTextContainer}>
                                <Text style={styles.signInText}> Email </Text>
                            </View>
                            <TextInput style={styles.textInput}
                                name="email"
                                id="email"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />

                            <View style={styles.signInTextContainer}>
                                <Text style={styles.signInText}> Password </Text>
                            </View>
                            <TextInput style={styles.textInput}
                                name="password"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <View style={[styles.buttonContainerSignIn, styles.flexRow]}>
                                <TouchableOpacity style={[styles.signInButton, styles.buttonLength, styles.blueBackground, styles.alignSelfCenter]}
                                    onPress={handleLogin}
                                >
                                    <Text style={[styles.btnText, styles.alignSelfCenter]}>Sign In</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.signInButton, styles.buttonLength, styles.blueBackground, styles.alignSelfCenter]}
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
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}