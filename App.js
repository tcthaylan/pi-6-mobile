import React from 'react';
import { Provider } from 'mobx-react';
import { View } from 'react-native';
import {AppContainer} from './app/views/index';
import RestaurantStore from './app/stores/RestaurantStore';

const stores = {
  restaurant: new RestaurantStore(),
}

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores} style={{height: '100%' }}>
        <AppContainer />
      </Provider>
    );
  }
}
