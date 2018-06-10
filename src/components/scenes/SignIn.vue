<template>
    <div>
        <Hero page="sign-in">
            <Heading tag="h1" size="xl">Sign in or register</Heading>
        </Hero>
        <Container style="margin-top: -200px;">
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <InvitationCard />
                </v-flex>
                <v-flex xs12 md6>
                    <SignInCard />
                </v-flex>
            </v-layout>
        </Container>
    </div>
</template>

<script>
import Hero from '@/components/Hero'
import Heading from '@/components/Heading'
import Container from '@/components/Container'
import InvitationCard from '@/components/InvitationCard'
import SignInCard from '@/components/SignInCard'

export default {
    name: 'SignIn',
    components: {
        Hero,
        Heading,
        Container,
        InvitationCard,
        SignInCard
    }
}
</script>

<style lang="scss" scoped>
// .card-container {
//     display: flex;
//     > * {
//         margin-right: 3rem;
//         &:last-of-type {
//             margin-right: 0;
//         }
//     }
// }

// .card {
//     width: 50%;
//     background: var(--background);
// }
</style>
