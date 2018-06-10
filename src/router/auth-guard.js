import firebase from '../firebase';
import store from '../store'

export default async (to, from, next) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            console.log("I AM ALLOWED HERE")
            next()
        } else {
            console.log("I AM NOT ALLOWED HERE", store.getters)
            next('/sign-in')
        }
    })
}