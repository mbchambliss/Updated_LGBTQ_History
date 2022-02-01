//To run an event load, "node eventload.js"

const admin = require('./node_modules/firebase-admin');
var serviceAccount = require("./serviceAccount.json");
const data = require("./events.json");
const collectionKey = "test_events";


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://history-app-422.firebaseio.com"
});

const firestoreAdmin = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestoreAdmin.settings(settings);


if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        firestoreAdmin.collection(collectionKey).doc(data[docKey]['events_id']).collection("this_day").doc(data[docKey]['id']).set(data[docKey]).then((res) => {
            console.log("DocKey: " + docKey);
            console.log("Document " + docKey + " written!");
        }).catch((error) => {
            console.error("Error: ", error);
        });
    });
}