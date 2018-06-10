// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed)

import './auth'

import Vuetify from 'vuetify'
import './stylus/main.styl'
Vue.use(Vuetify)

import VueQrcodeReader from 'vue-qrcode-reader'
Vue.use(VueQrcodeReader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>',
    created() {
        console.info("CREATED")
    }
})
