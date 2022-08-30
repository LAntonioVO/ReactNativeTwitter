import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainContent from '../../views/main';
import {ConfigurationView} from '../../views/configuration';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainContent} />
      <Drawer.Screen name="Configuration" component={ConfigurationView} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
