import RWR from 'react-webpack-rails';
RWR.run();

import Index from './components/index';
RWR.registerComponent('Index', Index);

if (module.hot) {
  module.hot.accept();
  RWR.reloadNodes();
}
