import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    testInfoCardColors: {
        backgroundColor: '#09417D',
        borderRadius: 20,
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
        color: '#FAC7ED',
        fontWeight: 'bold',
        paddingTop: 4,
        fontSize: 18,
    },
    content: {
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
        backgroundColor: '#FAC7ED',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 1.5,
        borderColor: '#09417D',
        borderRadius: 20,
        shadowColor: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.14,
        shadowRadius: 5,
    },
    moreText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#09417D',
    },
    align: {
        flexDirection: 'row',
        marginVertical: 10,
        marginLeft: 6,
    },
});