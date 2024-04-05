import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import TabsScreen from '../screens/HomeScreens/TabsScreen';
import NotificationsScreen from '../screens/HomeScreens/NotificationsScreen';
import {Colors} from '../constants/Colors';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryBackground,
        },
        tabBarStyle: {
          backgroundColor: Colors.secondaryBackground,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tabs" component={TabsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;

// const styles = StyleSheet.create({});
