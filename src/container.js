import { registerMicroApps, start } from 'qiankun';

const
function dispatchMicroContainer() {
  registerMicroApps([
    {
      name: '',
      entry: '',
      activeRule: '',
      props: '',
      container: '#microContainer',
    },
  ]);

  start();
}
