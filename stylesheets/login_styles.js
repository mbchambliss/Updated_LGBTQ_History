import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    login: {
        height: '100px',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login__container: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#dcdcdc",
        padding: "30px",
    },
    login__textBox: {
        padding: "10px",
        fontSize: 18,
        marginBottom: "10px",
    },
    login__btn: {
        padding: "10px",
        fontSize: 18,
        marginBottom: "10px",
        color: "white",
        backgroundColor: "black",
    },
    login__google: {
        backgroundColor: "#4285f4",
    },

});