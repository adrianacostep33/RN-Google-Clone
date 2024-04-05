import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchTabs from './SearchTabs';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Search" component={SearchTabs} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
