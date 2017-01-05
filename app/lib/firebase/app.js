import app from 'firebase/app'
import database from 'firebase/database'

export default app.initializeApp({
    apiKey: 'AIzaSyB1j2mm2zGqZMRzTGJzoiitUQ_mMDkpt8M',
    // authDomain: 'react-chat-5f0cd.firebaseapp.com',
    databaseURL: 'https://react-chat-5f0cd.firebaseio.com',
    storageBucket: 'react-chat-5f0cd.appspot.com',
    // messagingSenderId: '252610380534'
})