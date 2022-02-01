import React, { useEffect, useState } from 'react';
import { View, Text, Image, Linking, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../stylesheets/infocard_styles';

import { db } from '../firebase';
import { collection, onSnapshot, doc, getDocs, query, where, getDoc } from 'firebase/firestore';


function InfoCard() {

	const [events, setEvents] = useState([]);

	const getCurrentDate = () => {
		var date = new Date().getDate();
		var month = new Date().getMonth() + 1;
		return month + '-' + date;
	}

	let date = getCurrentDate();
	const eventsCollectionRef = collection(db, "events", date, "this_day");

	useEffect(() => {
		const getEvents = async () => {
			const data = await getDocs(eventsCollectionRef);
			console.log(JSON.stringify(data));
			setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.data.id })));
		}
		getEvents();
	}, []);

	return (
		<View >
			{events.map((event) => {
				return (
					<View style={styles.card} key={event.id}>
						<Text style={styles.title}>{event.title}</Text>
						<Text style={styles.content}>{event.date}</Text>
						<Text style={styles.content}>{event.short_desc}</Text>
						<View style={styles.align}>
							<Text style={styles.more}
								onPress={() => Linking.openURL(event.link)}>More Info</Text>
							<Icon.Button
								name="heart-outline"
								textAlign="center"
								color="white"
								backgroundColor="#FF69B4"
							/>
						</View>
					</View>
				)
			})}
		</View >
	);
}
export default InfoCard;