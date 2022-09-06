import React from 'react';
import MainContent from '../../views/main';
import Profile from '../../views/profile';
import Notifications from '../../views/notifications';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="feed"
        component={MainContent}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="notifications" color={color} size={26} />
          ),
          tabBarBadge: 5,
          tabBarBadgeStyle: {
            fontSize: 8,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
