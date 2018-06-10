<template>
    <v-form v-model="valid" @submit="handleSubmit" class="sign-in-form">
        <div>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email Address"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                :append-icon="passwordHidden ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (passwordHidden = !passwordHidden)"
                :type="passwordHidden ? 'password' : 'text'"
                :rules="passwordRules"
                name="password"
                label="Enter your password"
                hint="At least 6 characters"
                min="6"
                required
            ></v-text-field>
        </div>
        <div>
            <v-btn type="submit" :disabled="!valid" class="mx-0">Sign In</v-btn>
        </div>
    </v-form>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    
    export default {
        data: () => {
            return {
                email: "",
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                password: "",
                passwordRules: [
                    v => !!v || 'A password is required',
                    v => v.length >= 6 || 'Your password must be at least 6 characters long'
                ],
                passwordHidden: true,
                valid: false
            }
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault()
                this.$store.dispatch(
                    'user/signIn', 
                    { 
                        email: this.email, 
                        password: this.password
                    }
                )
                .then(
                    user => {
                        this.$router.push('/manage')
                    }
                )
                .catch(
                    error => {
                        alert("Failed to log in")
                    }
                )
                // console.log("route", this.$router.push('/manage'));
                // this.$route.router.go('/manage')
            }
        },
        computed: {
        },
    }
</script>

<style scoped>

</style>