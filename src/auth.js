import firebase, { firestore } from './firebase';
import store from './store';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // const newUser = {
        //     id: user.uid,
        //     name: user.displayName,
        //     email: user.email,
        //     photoUrl: user.photoURL,
        //     profile: firestore.collection("users").doc(user.uid)
        // }
        // store.commit('user/setUser', newUser)
        store.dispatch('user/load')
    } else {
        store.dispatch('user/signOut');
    }

    store.commit('setAuthenticating', false)
});