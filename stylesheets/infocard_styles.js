import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    testInfoCardColors: {
        backgroundColor: '#09417D',
        borderRadius: 20,
        padding: 5,
    },
    card: {
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
        // color: '#FFFFFF',
        color: '#FAC7ED',
        fontWeight: 'bold',
        paddingTop: 4,
        fontSize: 18,
    },
    content: {
        // color: '#FFFFFF',
        color: '#FAC7ED',
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