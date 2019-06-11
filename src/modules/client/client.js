import Vue from 'vue'
import Client from './Client.vue'
import router from './router'

new Vue({
    router,
    render: h => h(Client)
}).$mount('#client')