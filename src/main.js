import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
Vue.directive('preload', {
    inserted: function (el) {
        const image = new Image();
        image.src = el.src;
    }
});
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
