import '@/assets/js/path'; //设置__webpack_public_path__
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { Button } from 'vant';
import Http from 'nat-plus/lib/http';

const app = createApp(App);
app.use(Button).use(Http).use(store).use(router).mount('#app');
