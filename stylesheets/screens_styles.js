import { StyleSheet } from 'react-native';

// COLORS
// BLUE: '#1DACD6'
// PINK: '#FF69B4'
// LIGHT GRAY: '#F4F5F0'

export default StyleSheet.create({
    about: {
        marginTop: '6%'
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    already: {
        fontSize: 16,
        marginTop: '9%',
        color: '#FF69B4',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000',
    },
    alreadyBtnText: {
        color: '#1dacd6',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowRadius: .5,
        textShadowOffset: { width: .7, height: .7 },
        textShadowColor: '#000',
        marginLeft: '2%',
        marginTop: '9%',
        paddingLeft: 2,
    },
    blueBackground: {
        backgroundColor: '#1dacd6',
    },
    blue_line: {
        textDecorationColor: '#398ff4',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 20,
        fontWeight: 'bold',
        textShadowRadius: 3,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#FF69B4',
    },
    // button: {
    //     borderWidth: 4,
    //     borderColor: '#1dacd6',
    //     backgroundColor: '#1dacd6',
    //     borderRadius: 35,
    //     marginTop: 20,
    // },
    buttonContainerSignIn: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%'
    },
    buttonText: {
        color: '#fff',
        textShadowRadius: 1,
        textShadowOffset: { width: 0, height: 1 },
        textShadowColor: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },
    dateWarning: {
        width: '80%',
        marginBottom: 30,
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    feedback: {
        fontWeight: 'bold',
        color: '#FF69B4',
        fontSize: 26,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000',
    },
    first_resource: {
        marginTop: 20,
    },
    flexDisplayJustifyCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    flexOne: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row'
    },
    forgotPasswordBtn: {
        borderRadius: 35,
        marginTop: 15,
        width: 325,
    },
    forgotPasswordBtnText: {
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: '#FF69B4',
        textShadowRadius: 1,
        textShadowOffset: { width: 0, height: 1 },
        textShadowColor: '#000',
    },
    inputMessage: {
        width: '75%',
        height: 100,
        borderLeftColor: '#1DACD6',
        borderLeftWidth: 4,
        backgroundColor: '#FFF',
        marginLeft: '10%',
        marginBottom: 30,
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textShadowRadius: 2,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#F762A3',
    },
    opac: {
        borderWidth: 0.75,
        backgroundColor: '#F762A3',
        borderColor: '#F4F5F0',
        borderRadius: 20,
        height: 40,
        width: 225,
        marginTop: 15
    },
    photo: {
        height: 180,
        width: 180,
        marginTop: '15%',
        marginBottom: 10,
        borderRadius: 100,
    },
    pink_line: {
        textDecorationColor: '#FF69B4',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    },
    resourceBlock: {
        backgroundColor: '#FF69B4',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10,
        paddingBottom: 40,
    },
    resources_block: {
        paddingTop: 10,
        paddingBottom: 40,
    },
    margin_block: {
        paddingBottom: 40,
        marginBottom: 20,
        minHeight: '97%'
    },
    redBackground: {
        backgroundColor: '#CC0202',
    },
    redButton: {
        borderWidth: 4,
        borderColor: '#CC0202',
        borderRadius: 35,
    },
    redButton: {
        borderWidth: 2,
        borderColor: '#CC0202',
        borderRadius: 4,
    },
    resourceText: {
        color: '#FFF',
        margin: 10,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    resourceTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: '#FF69B4',
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 3,
        marginTop: 22,
        marginBottom: 5,
    },
    secondaryResourceText: {
        color: '#f5f5f5',
        fontStyle: 'italic',
        textShadowRadius: 2,
        margin: 10,
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    signin: {
        justifyContent: 'center'
    },
    signInButton: {
        borderWidth: 4,
        borderColor: '#1dacd6',
        borderRadius: 35,
        marginTop: 10,
    },
    buttonLength: {
        width: 150
    },
    buttonLengthLong: {
        width: 325
    },
    signInTitle: {
        marginTop: '20%',
        marginBottom: '10%',
        fontWeight: 'bold',
        color: '#FF69B4',
        fontSize: 40,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000',
    },
    signInText: {
        fontSize: 22,
        color: '#FF69B4',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000',
        backgroundColor: '#F4F5F0'
    },
    signInTextContainer: {
        marginLeft: '12%',
        marginBottom: '-3%',
        zIndex: 99,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        marginLeft: '10%',
        marginBottom: '2%',
        color: '#FF69B4',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000',
    },
    textInput: {
        width: '75%',
        height: 60,
        borderColor: '#1dacd6',
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: '10%',
        paddingLeft: 12,
        marginBottom: '8%',
        fontFamily: 'Arial',
        fontSize: 20
    },
    textMargin: {
        marginTop: '15%',
    },
    currentDayBtn: {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 35,
        marginTop: 10,
        padding: 8
    }
});