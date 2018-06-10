<template>
    <div>
        <Hero page="manage">
            <Heading tag="h1" size="xl">Manage your party</Heading>
        </Hero>
        <Container style="margin-top: -200px;">
            <v-container fluid class="v-container">
                <v-layout :class="{'v-layout': true, 'low-content': people.length < 3}">
                    <v-flex v-for="(person, index) in people" :key="person.id" class="v-card">
                        <PersonCard 
                            :index="index"
                            :id="person.id" 
                            :name="person.name.first + (' ' + person.name.last || '')" 
                            :attending="person.attending"
                            :starter="person.starter || false" 
                            :main="person.main || false" 
                            :dessert="person.dessert || false" 
                        />
                    </v-flex>
                </v-layout>
            </v-container>
        </Container>
    </div>
</template>

<script>
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import PersonCard from '@/components/PersonCard'

export default {
    name: 'Manage',
    // data: function() {
    //     return {
    //         people: []
    //     }
    // },
    computed: {
        people() {
            let people = this.$store.getters["user/people"]
            return people
        }
    },
    components: {
        Heading,
        Button,
        Hero,
        Container,
        PersonCard
    }
}
</script>

<style lang="scss" scoped>
    .v-card {
        min-width: 29rem;
        max-width: 36rem;
        width: 100%;
        margin: 0 0.5% 3rem;
    }

    .v-layout {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .v-container {
        margin: 0;
        padding: 0;
    }

    @media(min-width: 768px) {
        .v-card {
            max-width: 49%;
            margin: 0 1% 2rem 1%;
            width: auto;
        }
        .v-layout {
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
        }

        .v-layout.low-content {
            justify-content: center;
        }
    }

    @media(min-width: 1200px) {
        .v-card {
            max-width: 32.5%;
            margin: 0 0.5% 1.5rem;
        }
    }
</style>

