import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyBYCjId-2OsNnn08wszEFLtBaQhcrWccXY',
    authDomain: 'whittick-wedding.firebaseapp.com',
    databaseURL: 'https://whittick-wedding.firebaseio.com',
    projectId: 'whittick-wedding',
    storageBucket: 'whittick-wedding.appspot.com',
    messagingSenderId: '811955179602'
})

const firestore = firebase.firestore()
firestore.settings({
    timestampsInSnapshots: true
})

export { firestore }
export default firebase