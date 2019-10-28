import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const HomeRouter = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
}, {
  initialRouteName: 'Login',
});

export const AppContainer = createAppContainer(HomeRouter);
