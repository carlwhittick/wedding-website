<template>
    <router-link :to="$props.to" class="anchor"><slot></slot></router-link>
</template>

<script>
export default {
    name: 'Anchor',
    props: {
        to: String
    }
}
</script>

<style lang="scss" scoped>
    .anchor {
        font-family: var(--font-sans);
        color: var(--secondary);
        text-decoration: underline;
    }
</style>

