import Vue from 'vue';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import { registerApps } from './container';
import './permission';
import './core';

Vue.config.productionTip = false;

let eventEmitter = null;
eventEmitter = new Vue({
  router,
  store,
  mixins: [
    {
      beforeCreate() {
        this.$eventEmitter = eventEmitter;
      },
    },
  ],
  created() {
    // 设置App widget大小
    this.$ELEMENT.size = store.state.app.size;
  },
  render: h => h(App),
}).$mount('#app');
// 注册Apps
registerApps({ eventEmitter });
