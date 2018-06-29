import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import settings from '../settings.json'

firebase.initializeApp(settings.firebase)

const firestore = firebase.firestore()
firestore.settings({
    timestampsInSnapshots: true
})

export { firestore }
export default firebase