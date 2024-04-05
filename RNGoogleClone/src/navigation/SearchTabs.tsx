import React from 'react';
import ResultsScreen from '../screens/SearchScreens/ResultsScreen';
import ImagesScreen from '../screens/SearchScreens/ImagesScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VideosScreen from '../screens/SearchScreens/VideosScreen';
import NewsScreen from '../screens/SearchScreens/NewsScreen';
import BooksScreen from '../screens/SearchScreens/BooksScreen';
import FinanceScreen from '../screens/SearchScreens/FinanceScreen';

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

export default SearchTabs;
