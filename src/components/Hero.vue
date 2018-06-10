<template>
    <Section :class="$props.page">
        <div class="header-container">
            <slot></slot>
        </div>
    </Section>
</template>

<script>
import Section from '@/components/Section'

export default {
    name: 'HomeHero',
    props: {
        page: {
            default: 'hero',
            type: String
        }
    },
    components: {
        Section
    }
}
</script>


<style lang="scss" scoped>
.header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 20rem;
    margin: 0 3rem;
}

.hero {
    background-image: url("../assets/images/leaffade.png");
    background-size: 400px;
    background-repeat: repeat-x, no-repeat;
    background-position: center bottom, center top;
    min-height: 130px;
    @media(min-width: 768px) {
        min-height: 230px;
        background-size: 400px, 1250px auto;
    }
}

.home {
    background-image: url("../assets/images/leaffade.png"), url("../assets/images/bgmanor.jpg");
    background-size: 400px, 800px auto;
    background-repeat: repeat-x, no-repeat;
    background-position: center bottom, center top;
    min-height: 450px;
    @media(min-width: 768px) {
        min-height: 600px;
        background-size: 400px, 1250px auto;
    }
}

.sign-in {
    background-image: url("../assets/images/leaffade.png"), url("../assets/images/bglock.jpg");
    background-size: 400px, 800px auto;
    background-repeat: repeat-x, no-repeat;
    background-position: center bottom, center top;
    min-height: 450px;
    @media(min-width: 768px) {
        min-height: 600px;
        background-size: 400px, 1250px auto;
    }
}

.manage {
    background-image: url("../assets/images/leaffade.png"), url("../assets/images/bgcog.jpg");
    background-size: 400px, 800px auto;
    background-repeat: repeat-x, no-repeat;
    background-position: center bottom, center top;
    min-height: 450px;
    @media(min-width: 768px) {
        min-height: 600px;
        background-size: 400px, 1250px auto;
    }
}
</style>

