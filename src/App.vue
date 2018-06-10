<template>
    <v-app>
        <Header />
        <router-view />
    </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style lang="styl">
:root {
    --primary: #ff9d9a;
    --secondary: #072432;
    --background: #FFF;
    --recessed: '#AAA';

    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Raleway', sans-serif;
    --font-mono: 'Droid Sans Mono', monospace;
}

html {
    box-sizing: border-box;
    font-size: 10px;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    font-family: var(--font-sans);
    color: var(--secondary);
    background: var(--background);
    padding: 0;
    font-size: 1.6em;
}
</style>
