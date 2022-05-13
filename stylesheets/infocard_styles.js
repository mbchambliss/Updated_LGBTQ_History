import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        // backgroundColor: '#FF69B4',
        // backgroundColor: '#5B788B',
        // backgroundColor: '#874356',
        // backgroundColor: '#AD586E',
        width: '92%',
        alignSelf: 'center',
        marginTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    card_details: {
        borderRadius: 20,
        padding: 5,
    },
    title: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingTop: 4,
        fontSize: 18,
    },
    content: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    heart: {
        width: 30,
        height: 30,
    },
    more: {
        color: '#FFFFFF',
        paddingLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: '62%',
    },
    align: {
        flexDirection: 'row',
    },
});