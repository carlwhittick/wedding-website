<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
        padding: 0 15px;
        margin: 0 auto;
        position: relative;
        
        @media(min-width: 544px) { // 544px
            width: 100%;
        }

        @media(min-width: 768px) { // 768px
            width: 68.8rem; // 688px
        }

        @media(min-width: 992px) { // 992px
            width: 88rem; // 880px
        }

        @media(min-width: 1200px) { // 1200px
            width: 112rem; // 1120px
        }
    }
</style>

