import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import mavonEditor from 'mavon-editor';
import Clipboard from 'v-clipboard';
import lodash from 'lodash';

Vue.config.productionTip = false;

Vue.use(mavonEditor);
Vue.use(Clipboard);

window.$http = axios;
window.$lodash = lodash;
window.$router = router;
window.$store = store;

window.$vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
