<template>
    <Button @click.native="handleClick" :class="{button: true, loading: isAuthenticating}">
        <template v-if="isAuthenticating">
            Loading...
        </template>
        <template v-else>
            <template v-if="!signedIn">Sign In</template>
            <template v-else>Sign Out</template>
        </template>
        <v-progress-circular :size="16" :width="3" indeterminate color="white" class="spinner"></v-progress-circular>
    </Button>
</template>

<script>
    import Button from '@/components/Button'

    export default {
        computed: {
            signedIn() {
                return this.$store.getters['user/signedIn']
            },
            isAuthenticating() {
                return this.$store.getters['authenticating']
            }
        },
        methods: {
            handleClick() {
                if(this.signedIn) {
                    this.$store.dispatch('user/signOut')
                } else {
                    this.$router.push('/sign-in')
                }
            }
        },
        components: {
            Button
        }
    }
</script>

<style scoped>
    .button {
        position: relative;
    }

    .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    .button.loading {
        color: transparent;
    }

    .button.loading .spinner {
        display: block;
    }
</style>