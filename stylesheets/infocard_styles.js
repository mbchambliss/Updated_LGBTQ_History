import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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