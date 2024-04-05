/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {Colors} from './constants/Colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background600,
    text: 'white',
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
