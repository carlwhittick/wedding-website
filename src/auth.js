import firebase, { firestore } from './firebase';
import store from './store';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch('user/load')
    } else {
        store.dispatch('user/signOut');
    }

    store.commit('setAuthenticating', false)
});