import firebase, { firestore } from '@/firebase'
import { querystring } from '@firebase/util';

export default {
    namespaced: true,
    state: {
        user: null,
        people: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setPeople(state, payload) {
            state.people = payload
        }
    },
    actions: {
        load({state, commit}) {
            this.commit('setFetching', true)

            const user = firebase.auth().currentUser
            const profile = firestore.collection("users").doc(user.uid)
            const newUser = {
                id: user.uid,
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                profile: profile
            }
            commit("setUser", newUser)

            const peopleRef = profile.collection("people")

            peopleRef.get().then((querySnapshot) => {
                let people = []
                querySnapshot.forEach((doc) => {
                    people.push({ref: doc.ref, ...doc.data()})
                })

                commit("setPeople", people)
                this.commit('setFetching', false)
            })
            console.log("PEOPLEREF", peopleRef)
        },
        signUp({ commit, state }, { email, password }) {
            this.commit('setLoading', true)
            this.commit('clearError')
            
            return firebase.auth().createUserWithEmailAndPassword( email, password )
            .then(
                ({ user }) => {
                    console.log("user", user)
                    this.commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                        profile: firestore.collection("users").doc(user.uid)
                    }
                    commit('setUser', newUser)
                    return newUser
                }
            )
            .catch(
                error => {
                    this.commit('setLoading', false)
                    this.commit('setError', error)
                }
            )
        },
        signIn({ commit }, { email, password }) {
            this.commit('setLoading', true)
            this.commit('clearError')

            return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                ({ user }) => {
                    this.commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    }
                    commit('setUser', newUser)
                    return newUser
                }
            )
            .catch(
                error => {
                    console.log("IT FAILED", error)
                    this.commit('setLoading', false)
                    this.commit('setError', error)
                }
            )
        },
        async signOut({ commit }) {
            await firebase.auth().signOut()
            commit('setUser', null)
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        signedIn(state) {
            return state.user ? true : false
        },
        people(state) {
            return state.people
        },
        personById: (state) => (id) => {
            return state.people.filter((person) => person.id === id)[0]
        }
    }
}