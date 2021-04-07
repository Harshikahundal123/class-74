import React ,{Component} from 'react'
import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCzdIuSeG-IbSFixTS6uIclWr-FsIxWmc4",
    authDomain: "wily-d692b.firebaseapp.com",
    databaseURL: "https://wily-d692b-default-rtdb.firebaseio.com",
    projectId: "wily-d692b",
    storageBucket: "wily-d692b.appspot.com",
    messagingSenderId: "6730019830",
    appId: "1:6730019830:web:24ce81d6dbdd2af2fb8dd7",
    measurementId: "G-9H2V41CP4E"
  };
let app= Firebase.initializeApp(config);
export const db = app.database();