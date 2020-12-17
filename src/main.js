import Vue from 'vue'
import App from './App.vue'
import "./styles/app.css"
import VueRx from 'vue-rx'
import VuejsClipper from 'vuejs-clipper'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRx)


Vue.use(VuejsClipper, {
    components: {
        clipperBasic: true,
        clipperPreview: true,
        clipperUpload:true,

    }
})
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
