/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ResultsScreen from './screens/SearchScreen/ResultsScreen';
import ImagesScreen from './screens/SearchScreen/ImagesScreen';
import VideosScreen from './screens/SearchScreen/VideosScreen';
import NewsScreen from './screens/SearchScreen/NewsScreen';
import BooksScreen from './screens/SearchScreen/BooksScreen';
import FinanceScreen from './screens/SearchScreen/FinanceScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function SearchTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={ResultsScreen} />
      <Tab.Screen name="Images" component={ImagesScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Books" component={BooksScreen} />
      <Tab.Screen name="Finance" component={FinanceScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
