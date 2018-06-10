<template>
    <section class="section default">
        <slot></slot>
    </section>
</template>

<style lang="scss" scoped>
    .section {
        display: block;
        width: 100%;
        position: relative;
        z-index: 0;
    }

    .default {
        background-color: var(--primary);
    }
</style>