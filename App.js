console.disableYellowBox = true; // TODO

import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'mobx-react';

import AppNavigator from './app/navigator';
import stores from './app/stores';

import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

export default class App extends Component {
  render() {
    return (
      <Provider stores={stores}>
        <StyleProvider style={getTheme(custom)}>
          <AppNavigator/>
        </StyleProvider>
      </Provider>
    );
  }
}