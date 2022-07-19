import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../stylesheets/infocard_styles';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import defaultEvents from '../events/default_events.json';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts, Neuton_400Regular } from '@expo-google-fonts/neuton';


function InfoCard({ daySelect, monthSelect }) {

	const [events, setEvents] = useState([]);

	let [fontsLoaded] = useFonts({
		Oswald_400Regular,
		Neuton_400Regular
	});

	useEffect(() => {
		const getEvents = async () => {
			const day = await daySelect.toString();
			const month = await monthSelect.toString();
			let this_day = `${month}-${day}`;
			const data = await getDocs(collection(db, "test_events", this_day, "this_day"));
			if (data.docs.length > 0) {
				setEvents(data.docs.map((doc) => ({ ...doc.data() })));
			} else {
				setEvents(defaultEvents);
			}
		}
		getEvents();
	}, [daySelect, monthSelect]);

	return (
		<View >
			{events.map((event) => {
				return (
					<View style={[styles.card, styles.testInfoCardColors]} key={event.id}>
						{/* <LinearGradient
							colors={['#BB4E75', '#1E2AD2']}
							locations={[0.1, 1]}
							start={{ x: 0.1, y: 0.2 }}
							end={{ x: 0.3, y: 1.0 }}
							style={styles.card_details}
						> */}
						<View style={{ backgroundColor: '#FAC7ED', width: '55%', marginLeft: '45%', marginBottom: 12, height: 44, borderWidth: 2, borderColor: '#FAC7ED', borderTopRightRadius: 14, borderBottomLeftRadius: 14 }}>
							<Text style={[styles.content, { fontFamily: 'Oswald_400Regular', fontSize: 19, color: '#09417D' }]}>{event.date}</Text>
						</View>
						<View style={{ paddingHorizontal: 18 }}>
							<Text style={[styles.title, { fontFamily: 'Oswald_400Regular', fontSize: 26 }]}>{event.title}</Text>
							<View style={{ backgroundColor: '#FAC7ED', marginTop: 8, marginHorizontal: '20%', height: 2, borderWidth: 1, borderColor: '#FAC7ED' }}>
							</View>
							<Text style={[styles.content, { fontFamily: 'Neuton_400Regular', fontSize: 22, lineHeight: 26 }]}>{event.short_desc}</Text>
							{event.extra.length > 0 &&
								<Text style={[styles.content, { fontFamily: 'Neuton_400Regular', fontSize: 21 }]}>{event.extra}</Text>
							}
							<View style={styles.align}>
								<View style={styles.more}>
									<Text style={styles.moreText}
										onPress={() => Linking.openURL(event.link)}>More Info</Text>
									{/* {auth.currentUser != null &&
								<Icon.Button
									name="heart-outline"
									textAlign="center"
									color="#FFFFFF"
									backgroundColor="transparent"
									size={20}
								/>
							} */}
								</View>
							</View>
						</View>
						{/* </LinearGradient> */}
					</View>
				)
			})}
		</View >
	);
}
export default InfoCard;