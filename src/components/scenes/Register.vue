<template>
    <div>
        <Hero />
        <Container style="margin-top: -12rem">
            <template v-if="! $store.getters.loading">
                <template v-if="inviteCode && people.length > 0">
                    <v-card class="card">
                        <Heading>{{ invite.name }}</Heading>
                        <p v-if="invite.message">{{ invite.message }}</p>
                        <RegistrationForm :people="people" :inviteCode="inviteCode" />
                    </v-card>
                </template>
                <template v-else>
                    <InvitationCard v-if="people && people.length === 0" info="All of the people assigned to this invitation are already being managed." />
                    <InvitationCard v-else />
                </template>
            </template>
            <template v-else>
                <v-card class="card">
                    <v-progress-circular indeterminate :size="70" style="display: block; margin: 50px auto"></v-progress-circular>
                </v-card>
            </template>
        </Container>
    </div>
</template>

<script>
import RegistrationForm from '@/components/forms/RegistrationForm'
import InvitationCard from '@/components/InvitationCard'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Heading from '@/components/Heading'

import { mapGetters } from 'vuex';

export default {
    name: 'Register',
    created() {
        if(this.inviteCode === undefined) {
            this.$router.push("/sign-in")
            return
        }

        // Open the invitation
        this.$store.dispatch("invitation/openInvitation", { code: this.inviteCode }).then(() => {
            // Get unregistered people
            const invite = this.$store.getters["invitation/invite"]

            if(invite === null) {
                this.$router.push("/sign-in")
                return
            }

            const unregisteredPeople = invite.people.where("registered", "==", false)
            unregisteredPeople.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    this.people.push({
                        id: doc.id,
                        fullName: data.name.first + (' ' + data.name.last || ''),
                        firstName: data.name.first,
                        lastName: data.name.last
                    })
                })
            })
        })
    },
    data() {
        return {
            people: []
        }
    },
    computed: {
        inviteCode() {
            return this.$route.params.inviteCode
        },
        ...mapGetters('invitation', [
            'invite'
        ])
    },
    asyncComputed: {
        test() {
            // let aaa = this.$store.dispatch("invitation/openInvitation", { code: this.inviteCode })
            console.log("TEST")
            // return this.$store.dispatch("invitation/openInvitation", { code: this.inviteCode })
        }
    },
    components: {
        RegistrationForm,
        InvitationCard,
        Container,
        Hero,
        Heading
    }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 1.0rem;
}
</style>
