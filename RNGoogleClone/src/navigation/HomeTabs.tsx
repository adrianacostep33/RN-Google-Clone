/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import TabsScreen from '../screens/HomeScreens/TabsScreen';
import NotificationsScreen from '../screens/HomeScreens/NotificationsScreen';
import {Colors} from '../constants/Colors';
import NavigationIcon from '../../components/HomeScreen/NavigationIcon';
import HeaderWrapper from '../../components/HomeScreen/HeaderWrapper';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.background500,
          borderTopWidth: 0,
        },
        tabBarInactiveTintColor: Colors.text600,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          header: ({options}) => {
            return (
              <HeaderWrapper>
                <Text style={{color: 'white'}}>{options.title}</Text>
              </HeaderWrapper>
            );
          },
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/homepage.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tabs"
        component={TabsScreen}
        options={{
          title: 'Tabs',
          header: ({options}) => {
            return (
              <HeaderWrapper>
                <Text style={{color: 'white'}}>{options.title}</Text>
              </HeaderWrapper>
            );
          },
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={26}
              source={require('../assets/icons/tabs.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          header: ({options}) => {
            return (
              <HeaderWrapper>
                <Text style={{color: 'white'}}>{options.title}</Text>
              </HeaderWrapper>
            );
          },
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={28}
              source={require('../assets/icons/notifications.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

// const styles = StyleSheet.create({
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   text: {
//     color: 'white',
//   },
// });
