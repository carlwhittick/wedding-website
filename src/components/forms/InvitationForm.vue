<template>
    <v-form v-model="valid" @submit="handleSubmit">
        <v-text-field
            v-model="code"
            :append-icon="'camera_alt'"
            :append-icon-cb="() => (cameraDialog = true)"
            type="text"
            :rules="codeRules"
            name="password"
            label="Enter your invitation code"
            required
            class="mb-3"
        ></v-text-field>
        <div>
            <v-btn type="submit" :disabled="!valid" class="ma-0">Begin Registration</v-btn>
        </div>
        <v-dialog v-model="cameraDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click.native="cameraDialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Invitation code scanner</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click.native="cameraDialog = false">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <qrcode-reader @decode="onQrDecode" :is="cameraDialog ? 'qrcode-reader' : ''"></qrcode-reader>
            </v-card>
        </v-dialog>
    </v-form>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    
    export default {
        data: () => {
            return {
                code: "",
                codeRules: [
                    v => !!v || 'Invitation code is required',
                    v => /^[a-z]+\-[a-z]+\-[a-z]+$/.test(v) || 'Invitation code must be valid'
                ],
                valid: false,
                cameraDialog: false
            }
        },
        created() {
            this.code = this.prefill
        },
        props: {
            prefill: String
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault()
                this.$router.push("/register/" + this.code)
            },
            onQrDecode(value) {
                this.code = value
                this.cameraDialog = false
            }
        }
    }
</script>

<style scoped>

</style>