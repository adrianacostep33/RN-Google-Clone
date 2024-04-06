import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchTabs from './SearchTabs';
import HomeTabs from './HomeTabs';
import {Colors} from '../constants/Colors';
import SearchHeader from '../components/SearchScreen/SearchHeader';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background600,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchTabs}
        options={{
          headerStyle: {
            backgroundColor: Colors.background600,
          },
          headerBackVisible: false,
          headerShadowVisible: false,
          header: () => <SearchHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
