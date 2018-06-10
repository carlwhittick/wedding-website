<template>
    <Wrapper :tag="$props.anchor ? 'router-link' : 'button'" :props="$props" :class="{'button': true, 'large': $props.large}">
        <slot></slot>
    </Wrapper>
</template>

<script>
export default {
    name: 'Button',
    props: {
        anchor: Boolean,
        large: Boolean,
        to: String
    }
}
</script>

<style lang="scss" scoped>
.button {
    font-family: var(--font-sans);
    display: inline-block;
    vertical-align: middle;
    padding: 1.4rem 2.1rem;
    -webkit-appearance: none;
    border: 1px solid transparent;
    border-radius: 0;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background: var(--secondary);
    color: var(--background);
    text-decoration: none;
    user-select: none;
    border-radius: 2px;
}

.large {
    padding: 1.9rem 3.2rem;
}
</style>
