<template>
    <v-card class="mx-2 mb-3 elevation-7">
        <v-card-title>
            <div>
                <Heading tag="h2">Sign In</Heading>
                <p class="mb-0">
                    Log in to the account you have previously created.
                </p>
            </div>
        </v-card-title>
        <div class="px-3 pt-0 pb-3">
            <SignInForm />
        </div>
    </v-card>
</template>

<script>
import Heading from '@/components/Heading'
import SignInForm from '@/components/forms/SignInForm'

export default {
    name: 'SignInCard',
    components: {
        Heading,
        SignInForm
    }
}
</script>

