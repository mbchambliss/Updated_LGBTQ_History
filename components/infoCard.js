import React, { useEffect, useState } from 'react';
import { View, Text, Image, Linking, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../stylesheets/infocard_styles';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


function InfoCard() {

	const [events, setEvents] = useState([]);

	const getCurrentDate = () => {
		var date = new Date().getDate();
		var month = new Date().getMonth() + 1;
		return month + '-' + date;
	}

	let date = getCurrentDate();
	// const eventsCollectionRef = collection(db, "events", date, "this_day");
	const eventsCollectionRef = collection(db, "test_events", "1-1", "this_day");

	useEffect(() => {
		const getEvents = async () => {
			const data = await getDocs(eventsCollectionRef);
			setEvents(data.docs.map((doc) => ({ ...doc.data() })));
		}
		getEvents();
	}, []);

	return (
		<View >
			{events.map((event) => {
				return (
					<View style={styles.card} key={event.id}>
						<LinearGradient
							colors={['#0D73E7', '#e40c69']}
							locations={[0.1, 1]}
							start={{ x: 0.4, y: 0.6 }}
							end={{ x: 0.8, y: 0.9 }}
							style={styles.card_details}
						>
							<Text style={styles.title}>{event.title}</Text>
							<Text style={styles.content}>{event.date}</Text>
							<Text style={styles.content}>{event.short_desc}</Text>
							<View style={styles.align}>
								<Text style={styles.more}
									onPress={() => Linking.openURL(event.link)}>More Info</Text>
								<Icon.Button
									name="heart-outline"
									textAlign="center"
									color="#FFFFFF"
									backgroundColor="transparent"
									size={20}
								/>
							</View>
						</LinearGradient>
					</View>
				)
			})}
		</View >
	);
}
export default InfoCard;