/* eslint-disable no-trailing-spaces */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import RootNavigation from './src/RootNavigation';
import Home from './src/screens/Home';

function App() {
  return <RootNavigation />;
  // return <Home />;
}

export default App;
