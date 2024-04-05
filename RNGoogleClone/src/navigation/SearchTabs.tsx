/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Dimensions} from 'react-native';
import ResultsScreen from '../screens/SearchScreens/ResultsScreen';
import ImagesScreen from '../screens/SearchScreens/ImagesScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VideosScreen from '../screens/SearchScreens/VideosScreen';
import NewsScreen from '../screens/SearchScreens/NewsScreen';
import BooksScreen from '../screens/SearchScreens/BooksScreen';
import FinanceScreen from '../screens/SearchScreens/FinanceScreen';
import {Colors} from '../constants/Colors';
import TopTabLabel from '../components/SearchScreen/TopTabLabel';

const Tab = createMaterialTopTabNavigator();

function SearchTabs() {
  const screenWidth = Dimensions.get('window').width;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarScrollEnabled: true,
        tabBarGap: 0,
        tabBarItemStyle: {
          width: 60,
          paddingHorizontal: 0,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text500,

        tabBarStyle: {
          backgroundColor: Colors.background600,
          width: screenWidth,
        },
        tabBarLabelStyle: {
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarLabel: ({focused}) => (
          <TopTabLabel focused={focused} label={route.name} />
        ),
      })}>
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
