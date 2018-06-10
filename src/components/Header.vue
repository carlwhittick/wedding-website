<template>
    <header>
        <Section class="flex-center">
            <Container class="container">
                <router-link to="/" class="logo">
                    Carl &amp; Rachael
                </router-link>
                <nav class="nav">
                    <!-- <Anchor to="/">Home</Anchor> -->
                    <SignInOutButton />
                </nav>
            </Container>
        </Section>
    </header>
</template>

<script>
import Section from '@/components/Section'
import Container from '@/components/Container'
import Anchor from '@/components/Anchor'
import SignInOutButton from '@/components/SignInOutButton'

export default {
    name: 'Header',
    components: {
        Section,
        Container,
        Anchor,
        SignInOutButton
    }
}
</script>


<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 120px;
    }

    .logo {
        width: auto;
        display: block;
        font-size: 3rem;
        font-family: var(--font-serif);
        color: var(--secondary);
        text-decoration: none;
        line-height: 1;
    }

    .nav {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        > a {
            margin: 0 1rem;
        }
    }
</style>