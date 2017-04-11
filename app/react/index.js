import RWR from 'react-webpack-rails';
RWR.run();

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import HashForm from './components/hash-form';
RWR.registerComponent('HashForm', HashForm);

import BoilingVerdict from './components/boiling-verdict';
RWR.registerComponent('BoilingVerdict', BoilingVerdict);

if (module.hot) {
  module.hot.accept();
  RWR.reloadNodes();
}
