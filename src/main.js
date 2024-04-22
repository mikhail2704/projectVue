import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import VueRouter from 'vue-router'
// import Swiper from 'swiper'
// import 'swiper/css'
// import VueCarousel from 'vue-carousel'
// import { slider, slideritem } from 'vue-concise-slider'
// import sliderbasic from './slider_basic'

// createApp.use(Vuex)
// createApp(App).use(VueCarousel);

createApp(App).use(store).use(router).mount('#app')
