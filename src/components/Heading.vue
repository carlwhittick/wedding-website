<template>
    <Wrapper :tag="$props.tag" :class="['heading', $props.size]">
        <slot></slot>
    </Wrapper>
</template>

<script>
import Wrapper from '@/components/Wrapper'

export default {
    name: 'Heading',
    props: {
        tag: {
            default: "div",
            type: String
        },
        size: String
    },
    components: {
        Wrapper
    }
}
</script>

<style lang="scss" scoped>
.heading {
    color: var(--secondary);
    margin: 0;
    padding: 0 0 0.6em 0;
    font-weight: normal;
    font-family: var(--font-serif);
    font-size: 4rem;
    line-height: 1;
    @media(max-width: 768px) {
        font-size: 3rem;
    }
}

.xl {
    font-size: 6rem;
    @media(max-width: 768px) {
        font-size: 4rem;
    }
}
</style>
