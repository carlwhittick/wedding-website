import { firestore } from '@/firebase'

export default {
    namespaced: true,
    state: {
        people: firestore.collection("people")
    },
    actions: {
        
    },
    getters: {
        
    }
}