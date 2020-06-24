import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
let instance = null;
function render() {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#vue-pro");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
router.beforeEach((to, form, next) => {
  console.log("vue-pro::::beforeEach:");
  next();
});

async function bootstrap(props) {
  console.log("vue-pro::bootstrap:", props);
}
async function mount(props) {
  render();
  console.log("vue-pro::mounted:", props);
}
async function unmount(props) {
  instance.$destroy();
  console.log("vue-pro::unmount:", props);
}
export { bootstrap, mount, unmount };
