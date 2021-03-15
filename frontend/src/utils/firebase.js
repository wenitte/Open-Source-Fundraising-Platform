import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "YOURS",
  authDomain: "YOURS",
  databaseURL: "YOURS",
  projectId: "YOURS",
  storageBucket: "YOURS",
  messagingSenderId: "YOURS",
  appId: "YOURS",
  measurementId: "YOURS"
};
firebase.initializeApp(config);

const database = firebase.database();

export { database };

export default firebase;
