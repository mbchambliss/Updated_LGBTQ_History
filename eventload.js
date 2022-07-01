//To run an event load, "node eventload.js"

const admin = require('./node_modules/firebase-admin');
var serviceAccount = require("./serviceAccount.json");
const data = require("./events.json");
const collectionKey = "events";


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://history-app-422.firebaseio.com"
});

const firestoreAdmin = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestoreAdmin.settings(settings);

if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        data.forEach(event => {
            firestoreAdmin.collection(collectionKey).doc(event['events_id']).collection('this_day').doc(event['id'].toString()).set(event).then((res) => {
                console.log('Res: ', res);
                console.log("Event: " + event['title'] + " added!");
            }).catch((error) => {
                console.error("Error: ", error);
            });
        });
    })
}