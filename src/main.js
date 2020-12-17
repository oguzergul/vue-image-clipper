import Vue from 'vue'
import App from './App.vue'
import "./styles/app.css"
import VueRx from 'vue-rx'
import VuejsClipper from 'vuejs-clipper'

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
