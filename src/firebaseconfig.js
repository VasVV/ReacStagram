import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

//import seedDatabase from './seed';

const config = {
    apiKey: "AIzaSyAW3LFyE8fzwZlDs8PrjSlIjnqklqrPhuQ",
authDomain: "reactstagram-3be86.firebaseapp.com",
projectId: "reactstagram-3be86",
storageBucket: "reactstagram-3be86.appspot.com",
messagingSenderId: "953417353668",
appId: "1:953417353668:web:d40a09ddf1d7e2d6f7fc91"
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

//console.log(firebase);

//seedDatabase(firebase);

export {firebase, FieldValue};