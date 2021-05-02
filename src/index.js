/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React from 'react';

import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
// import Article_Items from './src/component/Articles/Article_Items';
import store from './store/store';

import AppRouter from './components/config/router';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={ store }>
    <NavigationContainer>
    {/**Main navigator */}
     <AppRouter />
    </NavigationContainer>
    </ Provider>
  );
};

export default App;
