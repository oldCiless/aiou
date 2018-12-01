import Vue from 'vue';
import App from './App.vue';
import router from './helpers/router';
import store from './helpers/store';
import './registerServiceWorker';
import 'normalize.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
