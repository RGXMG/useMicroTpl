import { registerMicroApps, start } from 'qiankun';

function registerApps(props, defaultActive) {
  registerMicroApps([
    {
      name: 'vue-pro',
      entry: 'http://localhost:11001',
      activeRule: '/vue-pro',
      props,
      container: '#microContainer',
    },
    {
      name: 'react-pro',
      entry: 'http://localhost:11002',
      activeRule: '/react-pro',
      props,
      container: '#microContainer',
    },
  ]);
  start();
}
export { registerApps };
