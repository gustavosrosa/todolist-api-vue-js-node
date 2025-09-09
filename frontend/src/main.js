import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);

app.use(createBootstrap({ components: 'all', directives: 'all' }))

import * as BootstrapVueNext from 'bootstrap-vue-next'

Object.entries(BootstrapVueNext).forEach(([name, component]) => {
  app.component(name, component)
})

app.use(router);

app.mount('#app');