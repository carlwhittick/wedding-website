import { firestore } from '@/firebase'

const invitations = firestore.collection("invitations");

export default {
    namespaced: true,
    state: {
        invite: null
    },
    mutations: {
        setInvite(state, payload) {
            state.invite = payload
        }
    },
    actions: {
        openInvitation({ commit, state }, { code }) {
            this.commit('setLoading', true)
            const inviteRef = invitations.doc(code)

            return inviteRef.get().then((doc) => {
                this.commit('setLoading', false)
                if(doc.exists) {
                    const data = doc.data()

                    commit('setInvite', {
                        name: data.name,
                        message: data.message,
                        people: doc.ref.collection("people")
                    })
                } else {
                    this.commit('setError', 'Can\'t find an invitation with the code provided')
                }
            })
        }
    },
    getters: {
        invite(state) {
            return state.invite
        }
    }
}