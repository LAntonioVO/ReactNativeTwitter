import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ConfigurationView} from '../../views/configuration';
import TabNavigation from '../tab';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Configuration" component={ConfigurationView} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
