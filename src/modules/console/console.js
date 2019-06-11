import Vue from 'vue'
import Console from './Console.vue'
import router from './router'

new Vue({
    router,
    render: h => h(Console)
}).$mount('#console')