<template>
    <div>
        <Hero page="home">
            <Heading tag="h1" size="xl">We're getting married</Heading>
            <Button anchor large to="/sign-in">RSVP now</Button>
        </Hero>
        <Container style="margin-top: -200px;">
        </Container>
    </div>
</template>

<script>
import Hero from '@/components/Hero'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import Container from '@/components/Container'

export default {
    name: 'Home',
    components: {
        Hero,
        Heading,
        Button,
        Container
    }
}
</script>

<style lang="scss" scoped>

</style>

