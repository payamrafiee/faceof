import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './src/screens';
import store from './src/redux/store'
  ;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
