<template>
    <v-form v-model="valid" @submit="handleSubmit">
        <div>
            <v-select
                :items="people"
                :rules="peopleRules"
                v-model="selectedPeople"
                item-text="fullName"
                item-value="id"
                label="Invitees"
                multiple
                chips
                hint="Select the people you are responsible for"
                persistent-hint
                required
            ></v-select>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email Address"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :append-icon="passwordHidden ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (passwordHidden = !passwordHidden)"
                :type="passwordHidden ? 'password' : 'text'"
                :rules="passwordRules"
                name="password"
                label="Enter your password"
                hint="At least 6 characters"
                min="6"
                required
            ></v-text-field>
        </div>
        <div>
            <v-btn type="submit" :disabled="!valid" class="mx-0">Register</v-btn>
        </div>
    </v-form>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { firestore } from '@/firebase'
    
    export default {
        data: () => {
            return {
                valid: false,
                email: "",
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                password: "",
                passwordHidden: true,
                selectedPeople: [],
                peopleRules: [
                    v => v.length > 0 || 'You must select at least one invitee'
                ],
                passwordRules: [
                    v => !!v || 'A password is required',
                    v => v.length >= 6 || 'Your password must be at least 6 characters long'
                ]
            }
        },
        props: {
            people: {
                required: true,
                type: Array
            },
            inviteCode: {
                required: true,
                type: String
            }
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault()

                console.log("FORM SUBMITTED")

                let email = this.email
                let password = this.password
                let people = this.people.filter(person => this.selectedPeople.includes(person.id))


                this.$store.dispatch('user/signUp', { email, password })
                .then(
                    user => {
                        // const id = result.user.uid
                        console.log("RESULT USER", user)

                        // firestore.collection("people").doc(user.)
                        const userRef = firestore.collection("users").doc(String(user.id));

                        let batch = firestore.batch()

                        batch.set(userRef, { admin: false })

                        people.forEach(person => {
                            console.log("PERSON", person);
                            const invitePersonRef = firestore.collection("invitations").doc(this.inviteCode).collection("people").doc(person.id);
                            batch.set(userRef.collection("people").doc(person.id), {
                                id: person.id,
                                name: {
                                    first: person.firstName,
                                    last: person.lastName
                                },
                                attending: false
                            })

                            batch.update(invitePersonRef, {
                                registered: true
                            })
                        })

                        batch.commit().then(() => {
                            this.$router.push("/manage")
                        })


                        // user.profile.set({
                        //     admin: false
                        // })

                        // people.forEach(person => {
                        //     // const ref = person.personRef

                        //     person.personRef.update({
                        //         registered: true
                        //     })
                        //     person.invitePersonRef.update({
                        //         registered: true
                        //     })
                        //     // console.log("PERSON-", person)
                        // });

                        // console.log("PEOPLE", people)
                        
                        // const profileRef = this.$store.dispatch('user/updateProfile') //state.db.collection("users").doc(id);
                    }
                )
                .catch(
                    error => {
                        console.error(error)
                    }
                )

                // this.$store.dispatch("user/createWithEmailAndPassword", { email, password })
                // .then((result) => {
                //     const id = result.user.uid
                //     var userRef = this.$store.state.db.collection("users").doc(id);

                //     userRef.set({
                //         admin: false,
                //         people: this.selectedPeople.map((person) => {
                //             const ref = this.$store.state.db.collection("people").doc(person)

                //             ref.update({
                //                 "registered": true
                //             })

                //             return ref
                //         })
                //     })

                //     this.$router.push("/manage")
                // })
                // .catch((error) => {
                //     console.error(error)
                // })
            }
        }
    }
</script>

<style scoped>

</style>