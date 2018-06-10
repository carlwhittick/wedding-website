<template>
    <v-card class="mx-2 mb-3 elevation-7">
        <v-card-title class="pb-0">
            <div>
                <Heading tag="h2">Register your invite</Heading>
                <p class="mb-0">
                    This is where you can create your account/accounts from the invitation you will have hopefully recieved in the mail.
                </p>
            </div>
            <v-alert v-if="info" :value="true" type="info" style="width: 100%; margin: 1.5rem 0 0.5rem;">{{ info }}</v-alert>
        </v-card-title>
        <div class="px-3 pt-0 pb-3">
            <InvitationForm />
        </div>
    </v-card>
</template>

<script>
import Heading from '@/components/Heading'
import InvitationForm from '@/components/forms/InvitationForm'

export default {
    name: 'InvitationCard',
    props: {
        info: {
            type: [String, Boolean],
            default: false
        }
    },
    components: {
        Heading,
        InvitationForm
    }
}
</script>
