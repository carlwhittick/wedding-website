<template>
    <v-card class="card">
        <v-card-media :src="'https://picsum.photos/g/500/500?image=' + images[index]" height="200px">
        <v-layout column class="media">
            <v-card-title>
                <v-spacer></v-spacer>
                <v-menu bottom left>
                    <v-btn slot="activator" icon dark>
                    <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list>
                        <!-- <v-list-tile>
                            <v-list-tile-title>
                                <router-link :to="'manage/' + id">
                                    Edit
                                </router-link>
                            </v-list-tile-title>
                        </v-list-tile> -->
                        <v-list-tile @click="{}">
                            <v-list-tile-title>Remove</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-title class="white--text">
                <div class="display-1 pl-2 pt-5">{{ name }}</div>
            </v-card-title>
        </v-layout>
        </v-card-media>
        <!-- Comment back in when you need edit functionality -->
        <!-- <div style="padding: 5px; height: 0; position: relative">
            <router-link :to="'manage/' + id">
                <v-btn absolute small dark fab top right style="background-color: var(--primary)">
                    <v-icon style="color: var(--secondary)">edit</v-icon>
                </v-btn>
            </router-link>
        </div> -->
        <v-list>
            <v-list-tile @click="isAttending = !isAttending">
                <v-list-tile-action>
                    <v-checkbox v-model="isAttending" @click.native="isAttending = !isAttending"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-if="isAttending">Attending</v-list-tile-title>
                    <v-list-tile-title v-else>Not attending</v-list-tile-title>
                </v-list-tile-content>
                <v-icon color="red" v-if="!isAttending">error</v-icon>
            </v-list-tile>
            
            <v-list-group
                v-model="food"
                prepend-icon="restaurant"
                no-action
            >
                <v-list-tile slot="activator">
                    <v-list-tile-content>
                        <v-list-tile-title>Food</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Starter</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content style="text-align: right; padding-right: 7px;">
                        <v-list-tile-sub-title style="margin-top: -3px">—</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Main</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content style="text-align: right; padding-right: 7px;">
                        <v-list-tile-sub-title style="margin-top: -3px">—</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile><v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>Dessert</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content style="text-align: right; padding-right: 7px;">
                        <v-list-tile-sub-title style="margin-top: -3px">—</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
import { firestore } from '@/firebase'

export default {
    name: 'PersonCard',
    data: function() {
        return {
            food: false,
            images: [1050, 973, 1041, 991, 912, 867, 844, 788, 803, 815],
            isAttending: this.attending
        }
    },
    props: {
        index: {
            type: Number,
            default: 5
        },
        id: String,
        name: String,
        attending: {
            type: Boolean,
            default: false
        },
        starter: {
            type: [Object, Boolean],
            default: false
        },
        main: {
            type: [Object, Boolean],
            default: false
        },
        dessert: {
            type: [Object, Boolean],
            default: false
        }
    },
    watch: {
        isAttending(newValue, prevValue) {
            console.log("NEWVAL", newValue)
            const person = this.$store.getters["user/personById"](this.id)

            person.ref.update({
                "attending": newValue
            }).then(() => {
                this.$store.dispatch("user/load")
            })
        }
    }
}
</script>

<style scoped>
    
</style>