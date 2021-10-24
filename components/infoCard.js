import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function InfoCard() {
	return (
		<SafeAreaView>
			<View style={styles.card}>
				<Text style={styles.title}>
					Bullshit
		  	</Text>

				<Text style={styles.content}>
					DATE HERE
		    </Text>

				<Text style={styles.content}>
					SHORT DESCRIPTION HERE
			</Text>

				<View style={styles.align}>
					<Text style={styles.more}>
						More Info
			    </Text>

					<Icon.Button
						name="heart"
						textAlign="center"
						color="white"
						backgroundColor="#FF69B4"
					/>

				</View>
			</View>
		</SafeAreaView>
	);
}

export default InfoCard;

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#FF69B4',
		width: '85%',
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 20,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	title: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		paddingTop: 4,
		fontSize: 18,
	},
	content: {
		color: 'white',
		textAlign: 'center',
		paddingVertical: 8,
		paddingHorizontal: 8,
	},
	heart: {
		width: 30,
		height: 30,
	},
	more: {
		color: 'white',
		paddingLeft: 8,
		fontSize: 16,
		fontWeight: 'bold',
		paddingRight: '62%',
	},
	align: {
		flexDirection: 'row',
	},
});