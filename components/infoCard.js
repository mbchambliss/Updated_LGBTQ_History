import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../stylesheets/infocard_styles';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import defaultEvents from '../events/default_events.json';
import { auth } from '../firebase';


function InfoCard({ daySelect, monthSelect }) {

	console.log('InfoCard date details (M/D): ', monthSelect.toString(), "/", daySelect.toString());

	const [events, setEvents] = useState([]);

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
						<Text style={styles.title}>{event.title}</Text>
						<Text style={styles.content}>{event.date}</Text>
						<Text style={styles.content}>{event.short_desc}</Text>
						{event.extra.length > 0 &&
							<Text style={styles.content}>{event.extra}</Text>
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
						{/* </LinearGradient> */}
					</View>
				)
			})}
		</View >
	);
}
export default InfoCard;