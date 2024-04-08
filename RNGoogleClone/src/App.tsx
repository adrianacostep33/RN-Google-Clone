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
import {SearchProvider} from './contexts/SearchContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background800,
    text: 'white',
  },
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <SearchProvider>
        <MainNavigation />
      </SearchProvider>
    </NavigationContainer>
  );
}

export default App;
